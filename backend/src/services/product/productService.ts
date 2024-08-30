import prismaClient from "../../Prisma"

export interface IProductParams {
    nome: string
    descricao: string
    quantidade: number
    categoryId: string
}

class ProductService {
    async execute({ categoryId, descricao, nome, quantidade }: IProductParams) {
        try {
            const product = await prismaClient.product.create({
                data: {
                    descricao,
                    nome,
                    quantidade,
                    categoryId,
                },
                select: {
                    category: true,
                    descricao: true,
                    nome: true,
                    quantidade: true,
                    id: true,
                },
            })

            return product
        } catch (error) {
            console.log(error)
        }
    }
}

export { ProductService }
