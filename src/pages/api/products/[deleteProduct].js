import { productSchema } from "@/models/productSchema";
import MongooseConnect from "@/pages/mongo_config/mongoose";

const handler = async (req, res) => {
  const { method } = req;

  await MongooseConnect();

  if (method === "GET") {
    res.json(await productSchema.findByIdAndDelete(req.query.deleteProduct));
  }
};

export default handler;
