import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, index: true    },   //indexing 
  age: { type: Number },
  marks: {type: Number}
});

// compound index (multiple fields)
// userSchema.index({ age: 1, marks: -1 });

export const User = mongoose.model("User", userSchema);
