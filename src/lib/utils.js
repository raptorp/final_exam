import mongoose from "mongoose";
import { PIDTracker, User, Character } from "./models";
import bcrypt from "bcryptjs";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    console.log(db.connections);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getNewPID = async () => {
  try {
    if (!(await PIDTracker.findOne())) {
      // Initialize tracker if there's no previous PID
      const newTracker = new PIDTracker({ latestPID: 1 });
      await newTracker.save();
      return 1;
    }
    // Atomic update of PIDTracker to avoid duplicates
    const pidTracker = await PIDTracker.findOneAndUpdate(
      {},
      { $inc: { latestPID: 1 } },
      { new: true }
    );

    return pidTracker?.latestPID;
  } catch (err) {
    console.error("Error in getNewPID:", err);
    throw err;
  }
};

export const createNewUserDoc = async (username, email, password, userImg) => {
  await connectToDb();

  // Check if the username or email already exists
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    throw new Error("Username or email already exists");
  }

  const newPID = await getNewPID();

  if (newPID > 9999) {
    throw new Error("Maximum number of users reached");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create a new user
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    userImg,
    userId: newPID,
    isAdmin: false,
  });

  // Save the new user and update the PID tracker
  await newUser.save();

  console.log("New user added to database");

  return newUser;
};
