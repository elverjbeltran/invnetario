import {Router} from "express";
import { methodHTTP as CategoryController} from "../controllers/categoria.controllers.js";
const router = Router();

router.get("/", CategoryController.getCategory);
router.get("/:id", CategoryController.getCategoryById);
router.post("/", CategoryController.postCategory);
router.delete("/:id", CategoryController.deleteCategory);
router.put("/:id", CategoryController.updateCategory);
export default router;