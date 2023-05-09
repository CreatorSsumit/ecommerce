import MongooseConnect from "@/pages/mongo_config/mongoose";
import multiparty from "multiparty";
import multer from "multer";
import Cors from "cors";

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
  await MongooseConnect();
  await runMiddleware(req, res, multerUpload.single("file"));
  res.json(req.file);
};

export const config = {
  api: { bodyParser: false },
};

export default handler;
