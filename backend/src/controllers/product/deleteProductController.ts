import { Request, Response } from "express"
import {
    DeleteProductService,
    IDeleteProductServiceProps,
} from "../../services/product/deleteProductService"

class DeleteProductController {
    async handle(req: Request, res: Response) {
        const { idProduct } = req.body as IDeleteProductServiceProps

        const deleteservice = new DeleteProductService()

        let deletedProd = await deleteservice.execute({ idProduct })

        return res.status(200).json(deletedProd)
    }
}

export { DeleteProductController }
