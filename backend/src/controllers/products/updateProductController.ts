import { Request, Response } from "express"
import {
    IupdateProductServiceProps,
    UpdateProductService,
} from "../../services/products/updateProductService"

class UpdateProductController {
    async handle(req: Request, res: Response) {
        const { categoryId, descricao, id, nome, quantidade } =
            req.body as IupdateProductServiceProps

        let updateProductService = new UpdateProductService()

        const updateProduct = await updateProductService.execute({
            categoryId,
            descricao,
            id,
            nome,
            quantidade,
        })

        return res.status(200).json(updateProduct)
    }
}

export { UpdateProductController }
