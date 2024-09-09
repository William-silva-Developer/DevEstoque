/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Product";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "TbUsuarios" (
    "CoUsuario" TEXT NOT NULL,
    "NoUsuario" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TbUsuarios_pkey" PRIMARY KEY ("CoUsuario")
);

-- CreateTable
CREATE TABLE "TbProduto" (
    "CoProduto" TEXT NOT NULL,
    "NoProduto" VARCHAR(50) NOT NULL,
    "VaProduto" DECIMAL(10,2) NOT NULL,
    "QtEstoque" INTEGER NOT NULL,
    "categoria_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TbProduto_pkey" PRIMARY KEY ("CoProduto")
);

-- CreateTable
CREATE TABLE "TbPedido" (
    "CoPedido" TEXT NOT NULL,
    "DaAbertura" TIMESTAMP(3) NOT NULL,
    "DaEncerramento" TIMESTAMP(3),
    "VaPedido" DECIMAL(10,2) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TbPedido_pkey" PRIMARY KEY ("CoPedido")
);

-- CreateTable
CREATE TABLE "TbPedidoItem" (
    "IdPedidoItem" TEXT NOT NULL,
    "VaItem" DECIMAL(10,2) NOT NULL,
    "QtItem" INTEGER NOT NULL,
    "VaTotalItem" DECIMAL(10,2) NOT NULL,
    "CoPedido" TEXT NOT NULL,
    "CoProduto" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TbPedidoItem_pkey" PRIMARY KEY ("IdPedidoItem")
);

-- CreateTable
CREATE TABLE "TbCategoria" (
    "CoCategoria" TEXT NOT NULL,
    "NoCategoria" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TbCategoria_pkey" PRIMARY KEY ("CoCategoria")
);

-- AddForeignKey
ALTER TABLE "TbProduto" ADD CONSTRAINT "TbProduto_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "TbCategoria"("CoCategoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TbPedidoItem" ADD CONSTRAINT "TbPedidoItem_CoPedido_fkey" FOREIGN KEY ("CoPedido") REFERENCES "TbPedido"("CoPedido") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TbPedidoItem" ADD CONSTRAINT "TbPedidoItem_CoProduto_fkey" FOREIGN KEY ("CoProduto") REFERENCES "TbProduto"("CoProduto") ON DELETE RESTRICT ON UPDATE CASCADE;
