import { Router } from "express";
import { ControllerClientes } from "../controllers/ControllerClientes";


const controllerClientes = new ControllerClientes();
const router = Router();

//*Roles
router.get("/getAll", controllerClientes.getClientes);
router.post("/addCliente", controllerClientes.addCliente);
router.post("/updateCliente", controllerClientes.updateCliente);
router.post("/deleteCliente", controllerClientes.deleteCliente);
router.post("/getClientesByStatus", controllerClientes.getClientesByStatus);

export default router;
