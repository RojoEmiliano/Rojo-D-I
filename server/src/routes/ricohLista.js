import { Router } from "express";
import { listRicohLista, refreshRicohLista } from "../controllers/ricohLista.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/", requireAuth, listRicohLista);
router.post("/refresh", requireAuth, refreshRicohLista);

export default router;
