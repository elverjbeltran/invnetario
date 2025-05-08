import { Router } from "express";
import { methodHTTP as ProductoController } from "../controllers/productos.controllers.js";

const router = Router();

router.get("/", ProductoController.getProducto);
router.get("/:id", ProductoController.getProductoById);
router.post("/", ProductoController.postProducto);
router.delete("/:id", ProductoController.deleteProducto);
router.put("/:id", ProductoController.updateProducto);

export default router;