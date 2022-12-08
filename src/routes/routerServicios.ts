import { Router } from "express";
import { ControllerClientes } from "../controllers/ControllerClientes";
import { ControllerServicios } from "../controllers/ControllerServicios";


const controllerServicios = new ControllerServicios();
const router = Router();

//*Roles
router.get("/getAll", controllerServicios.getServicios);
// router.post("/addRol", controllerClientes.addRol);

export default router;
