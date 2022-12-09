import { Router } from "express";
import { ControllerServicios } from "../controllers/ControllerServicios";


const controllerServicios = new ControllerServicios();
const router = Router();

//*Roles
router.get("/getAll", controllerServicios.getServicios);
router.get("/addServicio", controllerServicios.addServicio);
router.get("/updateServicio", controllerServicios.updateServicio);
router.get("/deleteServicio", controllerServicios.deleteServicio);

export default router;
