import { Router } from "express";
import isAuth from "../../middlewares/isAuth";
import compraController from "./compra.controller";

const router = Router();

router.get("/", isAuth, compraController.getCarrinho);
router.post("/:id/:quantidade", isAuth, compraController.adiItemCarrinho);
router.post("/", isAuth, compraController.efetivarCompra);

export default router;
