import mongoose from "mongoose";
import "dotenv/config";

export const connectionToDb = async () => {
  try {
    if (!process.env.MONGODB_URL) {
      throw new Error("Environment variable MONGODB_URL is not defined");
    }
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("connected to DB");
  } catch (e) {
    console.log(e, "can not connect");
  }
};
