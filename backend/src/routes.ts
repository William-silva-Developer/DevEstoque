import { Router } from "express"
import { ControllerAuthUser } from "./controllers/authUser/controllerAuthUser"
import { createCategoryController } from "./controllers/category/createCategoryController"
import { isAuthenticated } from "./middleWares/authrizedRoutes/isAuthenticated"
import { ProductController } from "./controllers/product/productController"
import { ListAllproductController } from "./controllers/product/listAllproductController"
import { ListAllCategoryController } from "./controllers/category/listAllCategoryController"
import { DeleteProductController } from "./controllers/product/deleteProductController"
import { UpdateProductController } from "./controllers/product/updateProductController"
import { DeleteCategoryController } from "./controllers/category/deleteCategoryController"

const router = Router()
//AUTENTICAÇÃO
router.post("/session/", new ControllerAuthUser().handle)

//CATEGORIA
router.post(
    "/newCategory/",
    isAuthenticated,
    new createCategoryController().handle
)
router.get(
    "/listCategory",
    isAuthenticated,
    new ListAllCategoryController().handle
)

router.delete(
    "/deleteCategory",
    isAuthenticated,
    new DeleteCategoryController().handle
)

//PRODUTO
router.post("/newProduct/", isAuthenticated, new ProductController().handle)
router.get(
    "/listProducts/",
    isAuthenticated,
    new ListAllproductController().handle
)

router.delete(
    "/deleteProduct/",
    isAuthenticated,
    new DeleteProductController().handle
)
router.put(
    "/updateProduct/",
    isAuthenticated,
    new UpdateProductController().handle
)

export { router }
