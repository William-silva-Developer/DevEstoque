import prismaClient from "../../Prisma"

// Interface para os dados de entrada
export interface ICreateOrderItemService {
    dataAbertura: string
    valorPedido: number
    pedidoItem: ArraysItem[]
}

type ArraysItem = {
    CoProduto: string
    VaItem: number
    QtItem: number
    VaTotalItem: number
}

class CreateOrderItemService {
    async execute({
        dataAbertura,
        valorPedido,
        pedidoItem,
    }: ICreateOrderItemService) {
        try {
            // Mapeando os IDs dos produtos
            const productIds = pedidoItem.map((item) => item.CoProduto)

            // Verificação se existe algum produto
            if (productIds.length === 0) {
                throw new Error("Informe um produto para ser criado um pedido.")
            }

            // Checando se todos os produtos existem no banco
            const isProduct = await prismaClient.tbProduto.findMany({
                where: {
                    CoProduto: {
                        in: productIds,
                    },
                },
            })

            // Verificando se todos os produtos foram encontrados
            if (isProduct.length !== productIds.length) {
                throw new Error(
                    "Nenhum produto foi encontrado nos itens do pedido."
                )
            }

            const order = await prismaClient.tbPedido.create({
                data: {
                    DaAbertura: dataAbertura,
                    VaPedido: valorPedido,
                    TbPedidoItem: {
                        create: pedidoItem.map((item) => ({
                            CoProduto: item.CoProduto,
                            VaItem: item.VaItem,
                            QtItem: item.QtItem,
                            VaTotalItem: item.VaTotalItem,
                        })),
                    },
                },
            })

            return order
        } catch (error) {
            throw new Error(`Erro ao criar o pedido: ${error.message}`)
        }
    }
}

export { CreateOrderItemService }
