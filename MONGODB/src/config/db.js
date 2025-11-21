import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error:", error);
    process.exit(1);
  }
};

