import prismaClient from "../../Prisma"

export interface IupdateProductServiceProps {
    categoryId: string
    descricao: string
    nome: string
    quantidade: number
    id: string
}

class UpdateProductService {
    async execute({
        categoryId,
        descricao,
        id,
        nome,
        quantidade,
    }: IupdateProductServiceProps) {
        const updateProd = await prismaClient.tbProduto.update({
            where: {
                CoProduto: id,
            },
            data: {
                categoria_id: categoryId,
                NoDescricao: descricao,
                NoProduto: nome,
                QtEstoque: quantidade,
            },
            select: {
                categoria_id: true,
                NoDescricao: true,
                CoProduto: true,
                NoProduto: true,
                QtEstoque: true,
                imageUrl: true,
                VaProduto: true,
            },
        })

        return updateProd
    }
}
export { UpdateProductService }
