import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const mongoUrl = process.env.MONGO_URL

const connectDB = async () => {
  try {
    if (mongoUrl) await mongoose.connect(mongoUrl);
    console.log("database connected");
  } catch (error) {
    throw error;
  }
};

export default connectDB;