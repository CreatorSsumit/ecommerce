import { productSchema } from "@/models/productSchema";
import MongooseConnect from "@/pages/mongo_config/mongoose";

export default async function handler(req, res) {
  const { method } = req;
  const {
    data: { productName, productDescription, productPrice, image },
  } = req.body;
  await MongooseConnect();

  if (method === "POST") {
    productSchema
      .create({
        productName,
        productDescription,
        productPrice,
        image,
      })
      .then((e) => {
        res.status(200).json(e);
      });
  }
}
