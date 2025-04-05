import {Router} from "express";
import { methodHTTP as CategoryController} from "../controllers/categoria.controllers.js";
const router = Router();

router.get("/", CategoryController.getCategory)

export default router;