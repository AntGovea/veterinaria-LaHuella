import { Router } from "express";
import { ControllerEmpleados } from "../controllers/ControllerEmpleados";


const controllerEmpleados = new ControllerEmpleados();
const router = Router();

//*Roles
router.get("/getAll", controllerEmpleados.getEmpleados);
// router.post("/addRol", controllerClientes.addRol);

export default router;
