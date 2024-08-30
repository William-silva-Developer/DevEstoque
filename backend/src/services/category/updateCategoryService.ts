import prismaClient from "../../Prisma"

export interface IUpdateCategoryserviceProps {
    idCategory: string
    name: string
}

class UpdateCategoryService {
    async execute({ idCategory, name }: IUpdateCategoryserviceProps) {
        const updateCategory = await prismaClient.category.update({
            where: {
                id: idCategory,
            },
            data: {
                nome: name,
            },
            select: {
                id: true,
                nome: true,
            },
        })

        return updateCategory
    }
}

export { UpdateCategoryService }
