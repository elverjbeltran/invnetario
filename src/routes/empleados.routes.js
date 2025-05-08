import { Router } from "express";
import { methodHTTP as EmpleadoController } from "../controllers/empleados.controllers.js";

const router = Router();

router.get("/", EmpleadoController.getEmpleado);
router.get("/:id", EmpleadoController.getEmpleadoById);
router.post("/", EmpleadoController.postEmpleado);
router.delete("/:id", EmpleadoController.deleteEmpleado);
router.put("/:id", EmpleadoController.updateEmpleado);

export default router;