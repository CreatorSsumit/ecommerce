import { productSchema } from "@/models/productSchema";
import MongooseConnect from "@/pages/mongo_config/mongoose";

export default async function handler(req, res) {
  const { method } = req;

  await MongooseConnect();

  if (method === "GET") {
    res.json(await productSchema.findOne({ _id: req.query.id }));
  }

  if (method === "PUT") {
    let resp = await productSchema.findOneAndUpdate(
      { _id: req.query.id },
      req.body.data,
      {
        new: true,
      }
    );
    if (res) {
      res?.status(200).json(resp);
    } else {
      res?.status(404).json({ message: "Database Issue" });
    }
  }
}
