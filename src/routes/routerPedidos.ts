import { Router } from "express";
import { ControllerPedidos } from "../controllers/ControllerPedido";


const controllerPedidos = new ControllerPedidos();
const router = Router();

//*Roles
router.get("/getAll", controllerPedidos.getPedidos);

export default router;
