import { Router } from "express";
import { ControllerServicios } from "../controllers/ControllerServicios";


const controllerServicios = new ControllerServicios();
const router = Router();

//*Roles
router.get("/getAll", controllerServicios.getServicios);

export default router;
