/*
  Warnings:

  - Added the required column `NoDescricao` to the `TbProduto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TbProduto" ADD COLUMN     "NoDescricao" VARCHAR(200) NOT NULL;
