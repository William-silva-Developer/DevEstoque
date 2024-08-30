import prismaClient from "../../Prisma"

class ListCategoryService {
    async execute() {
        const listAllCategory = await prismaClient.category.findMany({
            select: {
                id: true,
                nome: true,
            },
        })

        return listAllCategory
    }
}
export { ListCategoryService }
