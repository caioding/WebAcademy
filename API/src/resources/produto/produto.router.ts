import { Router } from "express";
import produtoController from "./produto.controller";
import {produtoSchema} from "./produto.schemes";

const router = Router()

router.get("/", produtoController.index);
router.post("/", validadeBody{produtoSchema}, produtoController.create);
router.get("/:id", produtoController.read);
router.put("/:id", produtoController.update);
router.delete("/:id", produtoController.remove);

export default router;