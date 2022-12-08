import { Router } from "express";
import { ControllerCategorias } from "../controllers/ControllerCategorias";
import { ControllerClientes } from "../controllers/ControllerClientes";


const controllerCategorias = new ControllerCategorias();
const router = Router();

//*Roles
router.get("/getAll", controllerCategorias.getCategorias);
router.post("/addCategoria", controllerCategorias.addCategoria);
// router.post("/addRol", controllerClientes.addRol);

export default router;
