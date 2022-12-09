import { Router } from "express";
import { ControllerEmpleado } from "../controllers/ControllerEmpleado";


const controllerEmpleado = new ControllerEmpleado();
const router = Router();
//*Roles
router.get("/getAll", controllerEmpleado.getEmpleados);
router.post("/addEmpleado", controllerEmpleado.addEmpleado);

export default router;
