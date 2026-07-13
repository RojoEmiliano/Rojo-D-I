import { Router } from "express";
import { listProducts, getProductByModelCode } from "../controllers/products.controller.js";

const router = Router();

router.get("/", listProducts);
router.get("/:modelCode", getProductByModelCode);

export default router;
