import { Router } from "express";
import {
  listProducts,
  getProductByModelCode,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";
import { requireAuth } from "../middleware/auth.js";
import { uploadProductFiles } from "../middleware/upload.js";

const router = Router();

router.get("/", listProducts);
router.get("/:modelCode", getProductByModelCode);
router.post("/", requireAuth, uploadProductFiles, createProduct);
router.put("/:modelCode", requireAuth, uploadProductFiles, updateProduct);
router.delete("/:modelCode", requireAuth, deleteProduct);

export default router;
