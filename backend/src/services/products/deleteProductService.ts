import prismaClient from "../../Prisma"

export interface IDeleteProductServiceProps {
    idProduct: string
}

class DeleteProductService {
    async execute({ idProduct }: IDeleteProductServiceProps) {
        const deleteproduct = await prismaClient.tbProduto.delete({
            where: {
                CoProduto: idProduct,
            },
        })

        return { message: "Deleted Product with success", deleteproduct }
    }
}
export { DeleteProductService }
