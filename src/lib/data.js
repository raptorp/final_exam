import { auth } from "./auth";
import { Post, User, Character } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async () => {
  noStore();
  const session = await auth();

  try {
    await connectToDb();
    const user = await User.findById(session.user.id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const getCharacter = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await Character.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch character!");
  }
};

export const getAllCharacters = async () => {
  try {
    connectToDb();
    const allCharacters = await Character.find();
    return allCharacters;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch all characters!");
  }
};

export const getCharacters = async () => {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    throw new Error("User not authenticated");
  }

  try {
    await connectToDb();
    const user = await User.findById(session.user.id).populate("characters");
    if (!user) {
      throw new Error("User not found");
    }

    // Ensure that characters is an array
    return Array.isArray(user.characters) ? user.characters : [];
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch characters!");
  }
};
