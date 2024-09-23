import { Router } from "express";
import mainController from "../controllers/main";
import produtoCrontroller from "../controllers/produto";

const router = Router();
router.get("/", mainController.index);
router.get("/lorem/:paragraphs", mainController.lorem);
router.get("/hb1", mainController.hb1);
router.get("/hb2", mainController.hb2);
router.get("/hb3", mainController.hb3);
router.get("/hb4", mainController.hb4);

router.get("/produto", produtoCrontroller.index);
router.get("/produto/create", produtoCrontroller.create);
router.post("/produto/create", produtoCrontroller.create);
router.get("/produto/:id", produtoCrontroller.read);
router.get("/produto/update/:id", produtoCrontroller.update);
router.post("/produto/update/:id", produtoCrontroller.update);
router.get("/produto/remove/:id", produtoCrontroller.remove);

export default router;
