import { Router } from "express";
import { ControllerCategorias } from "../controllers/ControllerCategorias";
import { ControllerClientes } from "../controllers/ControllerClientes";


const controllerCategorias = new ControllerCategorias();
const router = Router();

//*Roles
router.get("/getAll", controllerCategorias.getCategorias);
router.post("/addCategoria", controllerCategorias.addCategoria);
router.post("/updateCategoria", controllerCategorias.updateCategoria);
router.post("/deleteCategoria", controllerCategorias.deleteCategoria);

export default router;
