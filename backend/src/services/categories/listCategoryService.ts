import prismaClient from "../../Prisma"

class ListCategoryService {
    async execute() {
        try {
            const listAllCategory = await prismaClient.tbCategoria.findMany({
                select: {
                    CoCategoria: true,
                    NoCategoria: true,
                },
            })

            return listAllCategory
        } catch (error) {
            throw new Error("Erro ao lista categorias. " + error?.message)
        }
    }
}
export { ListCategoryService }
