import prismaClient from "../../Prisma"

class ListProductService {
    async execute() {
        const listAll = await prismaClient.product.findMany({
            select: {
                category: true,
                descricao: true,
                id: true,
                nome: true,
                quantidade: true,
            },
        })

        return listAll
    }
}
export { ListProductService }
