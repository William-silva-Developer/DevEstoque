import { Response, Request } from "express"
import {
    IProductParams,
    ProductService,
} from "../../services/product/productService"

class ProductController {
    async handle(req: Request, res: Response) {
        try {
            const { categoryId, descricao, nome, quantidade } =
                req.body as IProductParams

            if (!categoryId || !descricao || !nome || !quantidade)
                throw new Error("Invalid category")

            const productService = new ProductService()

            const newProduct = await productService.execute({
                categoryId,
                descricao,
                nome,
                quantidade,
            })

            return res.status(201).json(newProduct)
        } catch (error) {
            console.log(error)
        }
    }
}

export { ProductController }
