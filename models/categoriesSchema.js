import mongoose, { Schema, model, models } from "mongoose";

const Schemamodel = new Schema({
  categoriesName: String,
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: "CategoriesSchema" },
  attributeList: { type: [{}] },
});

export const CategoriesSchema =
  models.CategoriesSchema || model("CategoriesSchema", Schemamodel);
