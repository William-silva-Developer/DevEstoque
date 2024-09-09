import prismaClient from "../../Prisma"

export interface IDeleteOrderService {
    idPerdido: string
}

class DeleteOrderService {
    async execute({ idPerdido }: IDeleteOrderService) {
        try {
            const existOrder = await prismaClient.tbPedido.findUnique({
                where: {
                    CoPedido: idPerdido,
                },
                include: {
                    TbPedidoItem: true,
                },
            })

            if (!existOrder) throw new Error("Pedido não encotrado!")

            await prismaClient.tbPedido.delete({
                where: {
                    CoPedido: idPerdido,
                },
            })

            return { message: "Pedido deletado com sucesso!" }
        } catch (error) {
            throw new Error(`Erro ao deletar o pedido: ${error.message}`)
        }
    }
}

export { DeleteOrderService }
