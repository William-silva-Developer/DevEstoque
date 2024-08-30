import { Request, Response } from "express"
import { ListProductService } from "../../services/product/listProductService"

class ListAllproductController {
    async handle(req: Request, res: Response) {
        const allProductsService = new ListProductService()

        const allProducts = await allProductsService.execute()

        return res.status(200).json(allProducts)
    }
}
export { ListAllproductController }
