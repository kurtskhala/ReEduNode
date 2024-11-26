import mongoose from "mongoose";

const animalsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: String,
    age: Number,
  },
  { timestamps: true }
);

export const animalsModel = mongoose.model("animals", animalsSchema);
