import prismaClient from "../../Prisma"

export interface IDeleteProductServiceProps {
    idProduct: string
}

class DeleteProductService {
    async execute({ idProduct }: IDeleteProductServiceProps) {
        const deleteproduct = await prismaClient.product.delete({
            where: {
                id: idProduct,
            },
        })

        return { message: "Deleted Product with success", deleteproduct }
    }
}
export { DeleteProductService }
