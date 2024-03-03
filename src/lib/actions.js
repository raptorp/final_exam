"use server";

import { revalidatePath } from "next/cache";
import { User, Character, Banner, Post } from "./models";
import { connectToDb, createNewUserDoc } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
import { auth } from "@/lib/auth";

// *****************************
// ***** HANDLE BLOG POSTS *****
// *****************************

export const addPost = async (_, formData) => {
  const session = await auth();

  const { title, desc, img, slug } = Object.fromEntries(formData);

  try {
    await connectToDb();
    const newPost = new Post({
      title,
      desc,
      img,
      slug,
      userId: session.user.userId,
    });

    await newPost.save();
    console.log("Saved to database");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("Deleted from database");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong" };
  }
};

// ************************
// ***** HANDLE USERS *****
// ************************

export const addUser = async (_, formData) => {
  console.log("Received formData:", formData);
  if (!formData || formData.entries === undefined) {
    console.error("formData is undefined or not a FormData object");
    return { error: "Invalid form data" };
  }
  const { username, email, password, userImg } = Object.fromEntries(formData);

  try {
    const newUser = createNewUserDoc(username, email, password, userImg);
    // Return success or additional user data as needed
    return { success: true, userId: newUser.userId };
  } catch (err) {
    console.error(err);
    return { error: "Failed to add user" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDb();

    const user = await User.findById(id);
    if (!user) {
      return { error: "User not found" };
    }

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);

    console.log("Deleted user and associated data from database");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

// *****************************
// ***** HANDLE CHARACTERS *****
// *****************************

export const addCharacter = async (_, formData) => {
  const session = await auth();

  const { charName, charImg, nation, resourceType, resourceLvl, bannerName } =
    Object.fromEntries(formData);

  try {
    await connectToDb();
    const user = await User.findById(session.user.id).populate("characters");
    if (!user) {
      return { error: "User not found" };
    }

    // Check if there is already an active character
    const hasActiveCharacter = user.characters.some(
      (char) => char.status && char.status.isActive
    );

    // Generate charId
    const charId = `${session.user.userId}.${user.characters.length + 1}`;

    // Create new character with appropriate isActive status
    const newCharacter = new Character({
      charName,
      charImg,
      nation,
      resource: { resourceType, resourceLvl },
      bannerName,
      charId: charId,
      status: {
        isActive: !hasActiveCharacter, // Set active if no active characters are present
        isDead: false,
        unplayed: hasActiveCharacter, // Set unplayed if there's an active character
      },
    });

    await newCharacter.save();
    console.log("Character added to database");

    user.characters.push(newCharacter._id); // Store reference to new character
    await user.save();
    console.log("Character added to user profile");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Failed to add character" };
  }
};

export const deleteCharacter = async (formData) => {
  const { charId } = Object.fromEntries(formData);

  try {
    await connectToDb();

    const session = await auth();
    const user = await User.findById(session.user.id);

    if (user.characters.remove(charId)) {
      await Character.findByIdAndDelete(charId);

      console.log("Character deleted from database");
      return { success: true };
    } else {
      return { error: "Character not found" };
    }
  } catch (err) {
    console.log(err);
    return { error: "Failed to delete character" };
  }
};

// ***** HANDLE CHARACTER STATUS UPDATES *****
export const updateCharStatus = async (formData) => {
  const { charId, newStatus } = Object.fromEntries(formData);
  const session = await auth();

  try {
    await connectToDb();

    const user = await User.findById(session.user.id).populate("characters");
    if (!user) {
      return { error: "User not found" };
    }

    const character = user.characters.find(
      (char) => char._id.toString() === charId
    );
    if (!character) {
      return { error: "Character not found" };
    }

    switch (newStatus) {
      case "activate":
        const currentlyActive = user.characters.find(
          (char) => char.status.isActive
        );
        if (currentlyActive) {
          currentlyActive.status.isActive = false;
          await currentlyActive.save();
        }
        character.status.isActive = true;
        character.status.unplayed = false;
        break;
      case "retire":
      case "reportDead":
        character.status.isActive = false;
        character.status.isDead = newStatus === "reportDead";
        character.status.unplayed = false;
        break;
      default:
        return { error: "Invalid status update" };
    }

    await character.save();
    return {
      success: true,
      message: `Character status updated to ${newStatus}`,
    };
  } catch (err) {
    console.log(err);
    return { error: "Failed to update character status" };
  }
};

// *******************************
// ***** HANDLE LOGIN/LOGOUT *****
// *******************************

// ***** LOGIN WITH GITHUB *****
export const handleGithubLogin = async () => {
  await signIn("github");
};

// ***** HANDLE LOGOUT *****
export const handleLogout = async () => {
  await signOut();
};

// ***** HANDLE LOGIN *****
export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    // return { error: "something went wrong" };
    throw err;
  }
};

// ***** REGISTER/CREATE NEW USER *****
export const register = async (previousState, formData) => {
  const { username, email, userImg, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    const newUser = createNewUserDoc(username, email, password, userImg);
    // Return success or additional user data as needed
    return { success: true, userId: newUser.userId };
  } catch (err) {
    console.log(err);
    return { error: "Failed to register new user" };
  }
};
