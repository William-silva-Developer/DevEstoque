import { Response, Request } from "express"
import {
    IProductParams,
    ProductService,
} from "../../services/products/productService"

class ProductController {
    async handle(req: Request, res: Response) {
        try {
            const { categoryId, descricao, nome, quantidade } =
                req.body as IProductParams

            if (!categoryId || !descricao || !nome || !quantidade)
                throw new Error("Invalid category")

            const productService = new ProductService()

            const newProduct = await productService.execute({
                descricao,
                categoryId,
                quantidade,
                nome,
                valorProduto: 12,
                categoria: "Esportivo",
                imageUrl:
                    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.esportelegal.com.br%2Fproduto%2Fkit-chuteira-society-esporte-legal-vulcano-caneleira-meiao-108443&psig=AOvVaw1hrTm9AE1zeKblFW1yy1X_&ust=1725670935806000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCXuquPrYgDFQAAAAAdAAAAABAE",
            })

            return res.status(201).json(newProduct)
        } catch (error) {
            console.log(error)
        }
    }
}

export { ProductController }
