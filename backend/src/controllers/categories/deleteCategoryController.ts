import { Request, Response } from "express"
import { DeleteCategoryService } from "../../services/categories/deleteCategoryService"

class DeleteCategoryController {
    async handle(req: Request, res: Response) {
        let idCategory = req.query.idCategory as string

        const deleteCategoryService = new DeleteCategoryService()

        const deleteCategory = await deleteCategoryService.execute({
            idCategory,
        })

        return res.status(200).json(deleteCategory)
    }
}
export { DeleteCategoryController }
