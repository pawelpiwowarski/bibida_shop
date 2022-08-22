/*
  Warnings:

  - Added the required column `priceID` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "priceID" TEXT NOT NULL;
