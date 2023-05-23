import { CategoriesSchema } from "@/models/categoriesSchema";
import MongooseConnect from "../mongo_config/mongoose";

export default async function handler(req, res) {
  const { method } = req;

  await MongooseConnect();
  const resp = await CategoriesSchema.find();
  res.json(resp);
}
