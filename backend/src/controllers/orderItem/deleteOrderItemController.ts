import { Request, Response } from "express"
import { DeleteOrderService } from "../../services/orderItem/deleteOrderService"

class DeleteOrderItemController {
    async handle(req: Request, res: Response) {
        try {
            const idPerdido = req.params.idPedido as string

            if (!idPerdido) throw new Error(`Delete order item ${idPerdido}`)

            const deleteOrderItemService = new DeleteOrderService()

            const deletedOrder = await deleteOrderItemService.execute({
                idPerdido,
            })
            return res.status(200).json(deletedOrder)
        } catch (error) {
            throw new Error(error)
        }
    }
}

export { DeleteOrderItemController }
