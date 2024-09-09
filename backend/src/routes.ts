import { Router } from "express"
import { ControllerAuthUser } from "./controllers/authenticatedUser/controllerAuthUser"
import { createCategoryController } from "./controllers/categories/createCategoryController"
import { isAuthenticated } from "./middleWares/authrizedRoutes/isAuthenticated"
import { ProductController } from "./controllers/products/productController"
import { ListAllproductController } from "./controllers/products/listAllproductController"
import { ListAllCategoryController } from "./controllers/categories/listAllCategoryController"
import { DeleteProductController } from "./controllers/products/deleteProductController"
import { UpdateProductController } from "./controllers/products/updateProductController"
import { DeleteCategoryController } from "./controllers/categories/deleteCategoryController"
import { ListOrderItemController } from "./controllers/orderItem/listOrderItemController"
import { CreateOrderItemController } from "./controllers/orderItem/createOrderItemController"
import { UpdateOrderItemController } from "./controllers/orderItem/updateOrderItemController"
import { DeleteOrderItemController } from "./controllers/orderItem/deleteOrderItemController"

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

//PEDIDO
router.get("/listOrders", isAuthenticated, new ListOrderItemController().handle)
router.post(
    "/createOrder",
    isAuthenticated,
    new CreateOrderItemController().handle
)
router.put(
    "/updateOrder",
    isAuthenticated,
    new UpdateOrderItemController().handle
)
router.delete(
    "/deleteOrder",
    isAuthenticated,
    new DeleteOrderItemController().handle
)

export { router }
