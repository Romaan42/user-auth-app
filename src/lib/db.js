import mongoose from "mongoose";

export const connectDb = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("Already connected to MongoDB");
    return;
  }
  await mongoose.connect(process.env.MONGO_DB_URL);
  console.log("database connected");
};
