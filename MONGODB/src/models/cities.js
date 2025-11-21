import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: {type:String},
  city: { type: String },
  
});

export const City = mongoose.model("City", citySchema);
