import { Router } from "express";
import { ControllerClientes } from "../controllers/ControllerClientes";


const controllerClientes = new ControllerClientes();
const router = Router();

//*Roles
router.get("/getAll", controllerClientes.getClientes);
router.post("/addCliente", controllerClientes.addCliente);

export default router;
