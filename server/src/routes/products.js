import { Router } from "express";
import {
  listProducts,
  listProductsAdmin,
  getProductByModelCode,
  createProduct,
  updateProduct,
  deleteProduct,
  restoreProduct,
} from "../controllers/products.controller.js";
import { requireAuth } from "../middleware/auth.js";
import { uploadProductFiles } from "../middleware/upload.js";

const router = Router();

router.get("/", listProducts);
router.get("/admin", requireAuth, listProductsAdmin);
router.get("/:modelCode", getProductByModelCode);
router.post("/", requireAuth, uploadProductFiles, createProduct);
router.put("/:modelCode", requireAuth, uploadProductFiles, updateProduct);
router.post("/:modelCode/restore", requireAuth, restoreProduct);
router.delete("/:modelCode", requireAuth, deleteProduct);

export default router;
