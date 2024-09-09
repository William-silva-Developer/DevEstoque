import { Request, Response } from "express"
import { ListCategoryService } from "../../services/categories/listCategoryService"

class ListAllCategoryController {
    async handle(req: Request, res: Response) {
        let categoryService = new ListCategoryService()

        let listcategory = await categoryService.execute()

        return res.status(200).json(listcategory)
    }
}

export { ListAllCategoryController }
