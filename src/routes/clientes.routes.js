import { Router } from "express";
import { methodHTTP as ClienteController } from "../controllers/clientes.controllers.js";

const router = Router();

router.get("/", ClienteController.getCliente);
router.get("/:id", ClienteController.getClienteById);
router.post("/", ClienteController.postCliente);
router.delete("/:id", ClienteController.deleteCliente);
router.put("/:id", ClienteController.updateCliente);

export default router;