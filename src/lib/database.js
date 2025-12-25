import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(process.env.MONGODB_URL);
    console.log("ready state: ", mongoose.connection.readyState);
  } catch (error) {
    console.log("error while connecting db", error);
    process.exit(1);
  }
};
