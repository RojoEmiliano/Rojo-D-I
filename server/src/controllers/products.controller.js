import { prisma } from "../lib/prisma.js";

export async function listProducts(req, res) {
  const { brand } = req.query;

  const products = await prisma.product.findMany({
    where: brand ? { brand } : undefined,
    orderBy: { name: "asc" },
  });

  res.json(products);
}

export async function getProductByModelCode(req, res) {
  const { modelCode } = req.params;

  const product = await prisma.product.findUnique({ where: { modelCode } });

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
}
