import { Request, Response } from "express"
import {
    CreateOrderItemService,
    ICreateOrderItemService,
} from "../../services/orderItem/createOrderItemService"

class CreateOrderItemController {
    async handle(req: Request, res: Response) {
        try {
            const { dataAbertura, pedidoItem, valorPedido } =
                req.body as ICreateOrderItemService

            if (!dataAbertura && !valorPedido && !pedidoItem)
                throw new Error("Erro ao criar pedido!")

            const createOrderItemService = new CreateOrderItemService()

            const createOrder = await createOrderItemService.execute({
                dataAbertura,
                pedidoItem,
                valorPedido,
            })

            return res.status(201).json(createOrder)
        } catch (error) {
            throw new Error(error)
        }
    }
}

export { CreateOrderItemController }
