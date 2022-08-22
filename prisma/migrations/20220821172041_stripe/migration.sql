/*
  Warnings:

  - You are about to drop the column `image_url` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `priceID` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Order_Items` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "image_url",
DROP COLUMN "price",
DROP COLUMN "priceID",
ADD COLUMN     "active" BOOLEAN,
ADD COLUMN     "created" TIMESTAMP(3),
ADD COLUMN     "default_price" TEXT,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "shipable" BOOLEAN,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT;
DROP SEQUENCE "Product_id_seq";

-- DropTable
DROP TABLE "Order_Items";
