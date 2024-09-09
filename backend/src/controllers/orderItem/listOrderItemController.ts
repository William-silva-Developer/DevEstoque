import { Request, Response } from "express"
import { ListOrderService } from "../../services/orderItem/listOrderService"

class ListOrderItemController {
    async handle(req: Request, res: Response) {
        try {
            const listOrderService = new ListOrderService()

            const listOrder = await listOrderService.execute()

            return res.status(200).json(listOrder)
        } catch (error) {
            throw new Error(error)
        }
    }
}
export { ListOrderItemController }
