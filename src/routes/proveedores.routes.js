import { Router } from "express";
import { methodHTTP as proveedoresController } from "../controllers/proveedores.controllers.js";
const router = Router();

router.get("/",proveedoresController.getProveedores);

export default router;