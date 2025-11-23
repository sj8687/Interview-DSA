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





// this is how we created a schema in mongodb in mongoshell
// db.createCollection("users", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: [ "name", "email", "age" ],
//       properties: {
//         name: { bsonType: "string" },
//         email: { bsonType: "string" },
//         age: { bsonType: "int", minimum: 1 }
//       }
//     }
//   }
// });
