"use server";
import { connectDb } from "@/lib/database";
import User from "@/models/userModel";
import bcrypt from "bcrypt";

export const registerUser = async (_, userData) => {
  await connectDb();

  const { name, email, password } = userData;

  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = await User.create({ name, email, password: hashedPassword });

  return {
    success: true,
    message: "User registered successfully",
    user: { name: user.name, email: user.email },
  };
};
