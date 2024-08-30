import prismaClient from "../../Prisma"

interface IDeleteCategoryServiceProps {
    idCategory: string
}

class DeleteCategoryService {
    async execute({ idCategory }: IDeleteCategoryServiceProps) {
        if (!idCategory) {
            throw new Error("Id invalid")
        }
        await prismaClient.category.delete({
            where: {
                id: idCategory,
            },
        })

        return { message: "Delete category with success" }
    }
}
export { DeleteCategoryService }
