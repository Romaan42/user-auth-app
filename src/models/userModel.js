import mongoose from "mongoose";

const User =
  mongoose.models.User ||
  mongoose.model("User", {
    name: String,
    email: String,
    password: String,
    image: String,
  });

export default User;
