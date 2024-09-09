import prismaClient from "../../Prisma"

class ListOrderService {
    async execute() {
        try {
            const listOrder = await prismaClient.tbPedido.findMany({
                select: {
                    CoPedido: true,
                    DaAbertura: true,
                    DaEncerramento: true,
                    VaPedido: true,
                },
            })

            return listOrder
        } catch (error) {
            throw new Error("Error: " + error?.message)
        }
    }
}

export { ListOrderService }
