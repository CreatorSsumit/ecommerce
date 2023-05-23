import mongoose, { Schema, model, models } from "mongoose";
import { CategoriesSchema } from "./categoriesSchema";

var pSchema = new Schema(
  {
    productName: String,
    productDescription: String,
    productPrice: Number,
    image: Array,
    propertyList: { type: [{}] },
    categories: {
      type: mongoose.Types.ObjectId || String,
      ref: CategoriesSchema.modelName,
      required: true,
    },
  },
  { timestamps: true }
);

export const productSchema = models.Product || model("Product", pSchema);
