import { Response, Request } from "express"
import {
    createCategoryService,
    INewCategory,
} from "../../services/categories/createCategoryService"

class createCategoryController {
    async handle(req: Request, res: Response) {
        const { name } = req.body as INewCategory

        const categoryService = new createCategoryService()
        if (!name) {
            throw new Error("Cannot find category")
        }
        const category = await categoryService.execute({ name })

        return res.status(201).json(category)
    }
}

export { createCategoryController }
