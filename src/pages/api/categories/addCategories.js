import { CategoriesSchema } from "@/models/categoriesSchema";
import MongooseConnect from "@/pages/mongo_config/mongoose";

const handler = async (req, res) => {
  const { method } = req;
  const { name, parentId } = req.body;
  await MongooseConnect();
  if (method === "POST") {
    CategoriesSchema.create({
      name,
      parentId,
    })
      .then((e) => {
        res.json(e);
      })
      .catch((err) => {
        res.status(404).json(err);
      });
  }
  if (method === "GET") {
    const resp = await CategoriesSchema.find();
    if (resp) {
      res.json(resp);
    }
  }
};

export default handler;
