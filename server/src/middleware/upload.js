import multer from "multer";
import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";

export const UPLOADS_ROOT = process.env.UPLOADS_DIR
  ? path.resolve(process.env.UPLOADS_DIR)
  : path.resolve("uploads");

const IMAGE_MIMES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const PDF_MIME = "application/pdf";

const storage = multer.diskStorage({
  destination: (req, _file, cb) => {
    const brand = ["epson", "ricoh"].includes(req.body.brand) ? req.body.brand : "misc";
    const modelCode = req.params.modelCode || req.body.modelCode || "sin-codigo";
    const dir = path.join(UPLOADS_ROOT, brand, modelCode);
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${randomUUID()}${ext}`);
  },
});

function fileFilter(_req, file, cb) {
  if (file.fieldname === "images") {
    return cb(null, IMAGE_MIMES.includes(file.mimetype));
  }
  if (file.fieldname === "dataSheet") {
    return cb(null, file.mimetype === PDF_MIME);
  }
  cb(null, false);
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024, files: 11 },
});

export const uploadProductFiles = upload.fields([
  { name: "images", maxCount: 10 },
  { name: "dataSheet", maxCount: 1 },
]);
