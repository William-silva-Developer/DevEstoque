import prismaClient from "../../Prisma"

interface IDeleteCategoryServiceProps {
    idCategory: string
}

class DeleteCategoryService {
    async execute({ idCategory }: IDeleteCategoryServiceProps) {
        try {
            if (!idCategory) {
                throw new Error("Id invalid")
            }
            await prismaClient.tbCategoria.delete({
                where: {
                    CoCategoria: idCategory,
                },
            })

            return { message: "Delete category with success" }
        } catch (error) {
            throw new Error("Error deleting category. " + error?.message)
        }
    }
}
export { DeleteCategoryService }
