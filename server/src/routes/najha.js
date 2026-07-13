import { Router } from "express";
import { listNajha, refreshNajha } from "../controllers/najha.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/", requireAuth, listNajha);
router.post("/refresh", requireAuth, refreshNajha);

export default router;
