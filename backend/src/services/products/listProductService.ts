import prismaClient from "../../Prisma"

class ListProductService {
    async execute() {
        const listAll = await prismaClient.tbProduto.findMany({
            select: {
                categoria: true,
                NoDescricao: true,
                CoProduto: true,
                NoProduto: true,
                QtEstoque: true,
                imageUrl: true,
                VaProduto: true,
            },
        })

        return listAll
    }
}
export { ListProductService }
