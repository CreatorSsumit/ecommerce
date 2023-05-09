const { Schema, model, models, default: mongoose } = require("mongoose");

const Schemamodel = new Schema({
  name: String,
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: "CategoriesSchema" },
});

export const CategoriesSchema =
  models.CategoriesSchema || model("CategoriesSchema", Schemamodel);
