import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.js";
import authRouter from "./routes/auth.js";
import najhaRouter from "./routes/najha.js";
import ricohListaRouter from "./routes/ricohLista.js";
import { UPLOADS_ROOT } from "./middleware/upload.js";

export const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(express.json());
app.use("/uploads", express.static(UPLOADS_ROOT));

app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);
app.use("/api/najha", najhaRouter);
app.use("/api/lista-ricoh", ricohListaRouter);
