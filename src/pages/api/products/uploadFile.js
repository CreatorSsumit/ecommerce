import MongooseConnect from "@/pages/mongo_config/mongoose";
import multer from "multer";
import cloudinary from "../cloudinaryConfig/cloudinary";
import DatauriParser from "datauri/parser";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (["image/jpeg", "image/png", "image/jpg"].includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const multerUpload = multer({ storage: storage, fileFilter: fileFilter });

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const handler = async (req, res) => {
  const { method } = req;
  const parser = new DatauriParser();
  await MongooseConnect();
  await runMiddleware(req, res, multerUpload.single("file"));

  const { path } = req.file;

  const uploadedImageResponse = await cloudinary.uploader.upload(
    path,
    () => "nextJS",
    { resource_type: "image", folder: "nextJS" }
  );
  console.log(uploadedImageResponse);

  res.json(uploadedImageResponse);
};

export const config = {
  api: { bodyParser: false },
};

export default handler;
