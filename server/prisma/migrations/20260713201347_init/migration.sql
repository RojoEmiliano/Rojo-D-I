-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('epson', 'ricoh');

-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('iByN', 'iColor', 'mByN', 'mColor');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "brand" "Brand" NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "modelCode" TEXT NOT NULL,
    "type" "ProductType" NOT NULL,
    "description" TEXT[],
    "imgs" TEXT[],
    "specs" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_modelCode_key" ON "Product"("modelCode");

-- CreateIndex
CREATE INDEX "Product_brand_idx" ON "Product"("brand");

-- CreateIndex
CREATE INDEX "Product_type_idx" ON "Product"("type");

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_email_key" ON "AdminUser"("email");
