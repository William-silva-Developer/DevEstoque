import prismaClient from "../../Prisma"

export interface IupdateProductServiceProps {
    categoryId: string
    descricao: string
    nome: string
    quantidade: number
    id: string
}

class UpdateProductService {
    async execute({
        categoryId,
        descricao,
        id,
        nome,
        quantidade,
    }: IupdateProductServiceProps) {
        const updateProd = await prismaClient.product.update({
            where: {
                id,
            },
            data: {
                categoryId,
                descricao,
                nome,
                quantidade,
            },
            select: {
                categoryId: true,
                descricao: true,
                id: true,
                nome: true,
                quantidade: true,
            },
        })

        return updateProd
    }
}
export { UpdateProductService }
