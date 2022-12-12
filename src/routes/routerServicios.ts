import { Router } from "express";
import { ControllerServicios } from "../controllers/ControllerServicios";


const controllerServicios = new ControllerServicios();
const router = Router();

//*Roles
router.get("/getAll", controllerServicios.getServicios);
router.post("/addServicio", controllerServicios.addServicio);
router.post("/updateServicio", controllerServicios.updateServicio);
router.post("/deleteServicio", controllerServicios.deleteServicio);
router.post("/getServiciosByStatus", controllerServicios.getServiciosByStatus);

export default router;
