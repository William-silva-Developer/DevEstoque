/*
  Warnings:

  - You are about to drop the `TbUsuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TbUsuarios";

-- CreateTable
CREATE TABLE "TbUsuario" (
    "CoUsuario" TEXT NOT NULL,
    "NoUsuario" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TbUsuario_pkey" PRIMARY KEY ("CoUsuario")
);
