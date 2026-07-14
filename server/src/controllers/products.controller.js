import { prisma } from "../lib/prisma.js";

export async function listProducts(req, res) {
  const { brand } = req.query;

  const products = await prisma.product.findMany({
    where: { deletedAt: null, ...(brand ? { brand } : {}) },
    orderBy: { name: "asc" },
  });

  res.json(products);
}

// Solo para el admin autenticado — a diferencia de listProducts (pública),
// permite ver productos inactivos (soft-deleted) para poder restaurarlos.
export async function listProductsAdmin(req, res) {
  const { brand, status = "active" } = req.query;

  const deletedFilter =
    status === "inactive" ? { deletedAt: { not: null } } : status === "all" ? {} : { deletedAt: null };

  const products = await prisma.product.findMany({
    where: { ...deletedFilter, ...(brand ? { brand } : {}) },
    orderBy: { name: "asc" },
  });

  res.json(products);
}

export async function getProductByModelCode(req, res) {
  const { modelCode } = req.params;

  const product = await prisma.product.findFirst({ where: { modelCode, deletedAt: null } });

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
}

const BRANDS = ["epson", "ricoh"];
const TYPES = ["iByN", "iColor", "mByN", "mColor"];

function buildFileUrl(req, brand, modelCode, filename) {
  const base = process.env.PUBLIC_API_URL || `${req.protocol}://${req.get("host")}`;
  return `${base}/uploads/${brand}/${modelCode}/${filename}`;
}

function parseDescription(raw) {
  if (Array.isArray(raw)) return raw;
  if (typeof raw === "string") {
    return raw
      .split("\n")
      .map(line => line.trim())
      .filter(Boolean);
  }
  return [];
}

function parseSpecs(raw) {
  if (typeof raw === "object" && raw !== null) return raw;
  try {
    return JSON.parse(raw);
  } catch {
    throw Object.assign(new Error("specs must be valid JSON"), { status: 400 });
  }
}

export async function createProduct(req, res) {
  try {
    const { brand, name, model, modelCode, type } = req.body;

    if (!BRANDS.includes(brand)) return res.status(400).json({ error: "Invalid brand" });
    if (!TYPES.includes(type)) return res.status(400).json({ error: "Invalid type" });
    if (!modelCode) return res.status(400).json({ error: "modelCode is required" });

    const description = parseDescription(req.body.description);
    const specs = parseSpecs(req.body.specs || "{}");

    const imageFiles = req.files?.images || [];
    const imgs = imageFiles.map(f => buildFileUrl(req, brand, modelCode, f.filename));

    const dataSheetFile = req.files?.dataSheet?.[0];
    if (dataSheetFile) {
      specs.dataSheet = buildFileUrl(req, brand, modelCode, dataSheetFile.filename);
    }

    const product = await prisma.product.create({
      data: { brand, name, model, modelCode, type, description, imgs, specs },
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(err.status || 400).json({ error: err.message });
  }
}

export async function updateProduct(req, res) {
  try {
    const { modelCode } = req.params;
    const existing = await prisma.product.findFirst({ where: { modelCode, deletedAt: null } });
    if (!existing) return res.status(404).json({ error: "Product not found" });

    const { brand, name, model, type } = req.body;
    if (brand && !BRANDS.includes(brand)) return res.status(400).json({ error: "Invalid brand" });
    if (type && !TYPES.includes(type)) return res.status(400).json({ error: "Invalid type" });

    const effectiveBrand = brand || existing.brand;

    const description =
      req.body.description !== undefined ? parseDescription(req.body.description) : existing.description;

    const specs = req.body.specs !== undefined ? parseSpecs(req.body.specs) : existing.specs;

    const keepImgs = req.body.keepImages ? JSON.parse(req.body.keepImages) : existing.imgs;

    const newImageFiles = req.files?.images || [];
    const newImgs = newImageFiles.map(f => buildFileUrl(req, effectiveBrand, modelCode, f.filename));
    const imgs = [...keepImgs, ...newImgs];

    const dataSheetFile = req.files?.dataSheet?.[0];
    if (dataSheetFile) {
      specs.dataSheet = buildFileUrl(req, effectiveBrand, modelCode, dataSheetFile.filename);
    }

    const product = await prisma.product.update({
      where: { modelCode },
      data: {
        brand: effectiveBrand,
        name: name ?? existing.name,
        model: model ?? existing.model,
        type: type ?? existing.type,
        description,
        imgs,
        specs,
      },
    });

    res.json(product);
  } catch (err) {
    res.status(err.status || 400).json({ error: err.message });
  }
}

export async function deleteProduct(req, res) {
  const { modelCode } = req.params;
  const existing = await prisma.product.findFirst({ where: { modelCode, deletedAt: null } });
  if (!existing) return res.status(404).json({ error: "Product not found" });

  await prisma.product.update({ where: { modelCode }, data: { deletedAt: new Date() } });
  res.status(204).end();
}

export async function restoreProduct(req, res) {
  const { modelCode } = req.params;
  const existing = await prisma.product.findFirst({ where: { modelCode, deletedAt: { not: null } } });
  if (!existing) return res.status(404).json({ error: "Inactive product not found" });

  const product = await prisma.product.update({ where: { modelCode }, data: { deletedAt: null } });
  res.json(product);
}
