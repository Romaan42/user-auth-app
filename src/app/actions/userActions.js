"use server";
import { connectDb } from "@/lib/db";
import Contact from "@/models/contactModel";

export async function FilesActions(data) {
  return { succes: true, data: data };
}

export const handleUserContact = async (_, data) => {
  await connectDb();

  const { name, email, subject, projectType, message } = data;
  const user = { name, email, subject, projectType, message };
  await Contact.create(user);
  return { success: true, message: "Submited successfully", data: user };
};
