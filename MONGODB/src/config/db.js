import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://shreyashjadhav59807_db_user:taSxsUoRl79d9UTM@cluster0.jdmkdpr.mongodb.net");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error:", error);
    process.exit(1);
  }
};

