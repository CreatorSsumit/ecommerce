// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { productSchema } from "@/models/productSchema";
import MongooseConnect from "@/pages/mongo_config/mongoose";

export default async function handler(req, res) {
  await MongooseConnect();

  const resp = await productSchema.find();
  // console.log(resp);

  res.json(resp);
}
