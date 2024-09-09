import prismaClient from "../../Prisma"

export interface IUpdateOrderItemService {
    idPedido: string
    idProduto: string
    valorItem: number
    quantidadeItem: number
}

class UpdateOrderItemService {
    async execute({
        idPedido,
        idProduto,
        quantidadeItem,
        valorItem,
    }: IUpdateOrderItemService) {
        try {
            const VaTotalItem = quantidadeItem * valorItem

            const updateOrder = await prismaClient.tbPedido.update({
                where: {
                    CoPedido: idPedido,
                },
                data: {
                    TbPedidoItem: {
                        create: {
                            VaItem: valorItem,
                            QtItem: quantidadeItem,
                            VaTotalItem: VaTotalItem,
                            CoProduto: idProduto,
                        },
                    },

                    VaPedido: {
                        increment: VaTotalItem,
                    },
                },
            })

            return updateOrder
        } catch (error) {
            throw new Error(
                "Erro em tentar atualizar pedido. " + error?.message
            )
        }
    }
}

export { UpdateOrderItemService }
