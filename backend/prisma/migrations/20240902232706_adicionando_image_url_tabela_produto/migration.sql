/*
  Warnings:

  - Added the required column `imageUrl` to the `TbProduto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TbProduto" ADD COLUMN     "imageUrl" TEXT NOT NULL;
