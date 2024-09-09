import { Request, Response } from "express"
import {
    IUpdateCategoryserviceProps,
    UpdateCategoryService,
} from "../../services/categories/updateCategoryService"

class UpdateCategoryController {
    async handle(req: Request, res: Response) {
        const { idCategory, name } = req.body as IUpdateCategoryserviceProps

        const updateCategoryService = new UpdateCategoryService()

        const updateCategory = await updateCategoryService.execute({
            idCategory,
            name,
        })

        return res.status(200).json(updateCategory)
    }
}

export { UpdateCategoryController }
