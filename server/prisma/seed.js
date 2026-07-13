import { PrismaClient } from "@prisma/client";
import epsonProducts from "../../client/src/assets/data/epson.js";
import ricohProducts from "../../client/src/assets/data/ricoh.js";

const prisma = new PrismaClient();

function toRow(product, brand) {
  const { modelCode, ...specs } = product.specs;

  return {
    brand,
    name: product.name,
    model: product.model,
    modelCode,
    type: product.type,
    description: product.description,
    imgs: product.imgs,
    specs,
  };
}

async function main() {
  const rows = [
    ...epsonProducts.map((p) => toRow(p, "epson")),
    ...ricohProducts.map((p) => toRow(p, "ricoh")),
  ];

  for (const row of rows) {
    await prisma.product.upsert({
      where: { modelCode: row.modelCode },
      update: row,
      create: row,
    });
  }

  console.log(`Seeded ${rows.length} products`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
