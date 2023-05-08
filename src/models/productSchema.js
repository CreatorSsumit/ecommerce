import mongoose, { Schema, model } from "mongoose";

var pSchema = new Schema(
  {
    productName: String,
    productDescription: String,
    productPrice: Number,
    image: Array,
  },
  { timestamps: true }
);

export const productSchema =
  mongoose.models.Product || model("Product", pSchema);
