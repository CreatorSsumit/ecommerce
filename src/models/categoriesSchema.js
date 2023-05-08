const { Schema, model, models } = require("mongoose");

const Schemamodel = new Schema({
  name: String,
});

export const CategoriesSchema =
  models.CategoriesSchema || model("CategoriesSchema", Schemamodel);
