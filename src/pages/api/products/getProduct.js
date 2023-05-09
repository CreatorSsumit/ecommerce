import { productSchema } from "@/models/productSchema";
import MongooseConnect from "@/pages/mongo_config/mongoose";

export default async function handler(req, res) {
  await MongooseConnect();
  const { method } = req;

  if (method === "GET") {
    res.status(200).json(await productSchema.find().populate("categories"));
  }
}
