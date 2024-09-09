import prismaClient from "../../Prisma"

export interface INewCategory {
    name: string
}

class createCategoryService {
    async execute({ name }: INewCategory) {
        try {
            const newCategory = await prismaClient.tbCategoria.create({
                data: { NoCategoria: name },
                select: { CoCategoria: true, NoCategoria: true },
            })

            return newCategory
        } catch (error) {
            throw new Error(
                "Error ao tentar criar nova categoria: " + error?.message
            )
        }
    }
}

export { createCategoryService }
