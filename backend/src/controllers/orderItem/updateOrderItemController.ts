import { Request, Response } from "express"
import {
    IUpdateOrderItemService,
    UpdateOrderItemService,
} from "../../services/orderItem/updateOrderService"

class UpdateOrderItemController {
    async handle(req: Request, res: Response) {
        try {
            const updateOrderItemService = new UpdateOrderItemService()

            const { idPedido, idProduto, quantidadeItem, valorItem } =
                req.body as IUpdateOrderItemService

            if (!idPedido && !idProduto && !quantidadeItem && !valorItem)
                throw new Error("Valor inválidos!")

            const updateOrderItem = await updateOrderItemService.execute({
                idPedido,
                idProduto,
                quantidadeItem,
                valorItem,
            })
            return res.status(200).json(updateOrderItem)
        } catch (error) {
            throw new Error(error)
        }
    }
}

export { UpdateOrderItemController }
