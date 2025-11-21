import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  age: { type: Number },
  marks: {type: Number}
});

export const User = mongoose.model("User", userSchema);
