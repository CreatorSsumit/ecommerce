import { CategoriesSchema } from "@/models/categoriesSchema";
import MongooseConnect from "@/pages/mongo_config/mongoose";

const handler = async (req, res) => {
  const { method } = req;
  const { name } = req.body;
  await MongooseConnect();
  if (method === "GET") {
    res.json(await CategoriesSchema.findOne({ _id: req.query.editCategories }));
  }

  if (method === "PUT") {
    const { categoriesName, parentId, attributeList } = req.body.data;
    let resp = await CategoriesSchema.findOneAndUpdate(
      { _id: req.query.editCategories },
      { categoriesName, parentId, attributeList },
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

  if (method === "DELETE") {
    res.json(
      await CategoriesSchema.findByIdAndDelete(req.query.editCategories)
    );
  }
};

export default handler;
