import prismaClient from "../../Prisma"

export interface INewCategory {
    name: string
}

class createCategoryService {
    async execute({ name }: INewCategory) {
        const newCategory = await prismaClient.category.create({
            data: { nome: name },
            select: { id: true, nome: true },
        })

        return newCategory
    }
}

export { createCategoryService }
