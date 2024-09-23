import { Router } from "express";
import produtoController from "./produto.controller";
import { produtoSchema } from "./produto.schemas";
import { validateBody } from "../../middlewares/validateBody";

const router = Router()

router.get("/", produtoController.index);
router.post("/", validateBody(produtoSchema), produtoController.create);
router.get("/:id", produtoController.read);
router.put("/:id", validateBody(produtoSchema), produtoController.update);
router.delete("/:id", produtoController.remove);

export default router;