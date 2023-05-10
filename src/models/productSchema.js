import mongoose, { Schema, model } from "mongoose";
import { CategoriesSchema } from "./categoriesSchema";

var pSchema = new Schema(
  {
    productName: String,
    productDescription: String,
    productPrice: Number,
    image: Array,
    propertyList: { type: [{}] },
    categories: {
      type: mongoose.Types.ObjectId,
      ref: CategoriesSchema.modelName,
    },
  },
  { timestamps: true }
);

export const productSchema =
  mongoose.models.Product || model("Product", pSchema);
