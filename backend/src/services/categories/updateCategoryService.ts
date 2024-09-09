import prismaClient from "../../Prisma"

export interface IUpdateCategoryserviceProps {
    idCategory: string
    name: string
}

class UpdateCategoryService {
    async execute({ idCategory, name }: IUpdateCategoryserviceProps) {
        try {
            const updateCategory = await prismaClient.tbCategoria.update({
                where: {
                    CoCategoria: idCategory,
                },
                data: {
                    NoCategoria: name,
                },
                select: {
                    CoCategoria: true,
                    NoCategoria: true,
                },
            })

            return updateCategory
        } catch (error) {
            throw new Error("Error updating category. " + error?.message)
        }
    }
}

export { UpdateCategoryService }
