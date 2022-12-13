import { Router } from "express";
import { ControllerPedidos } from "../controllers/ControllerPedido";


const controllerPedidos = new ControllerPedidos();
const router = Router();

//*Roles
router.get("/getAll", controllerPedidos.getPedidos);
router.post("/addPedido", controllerPedidos.addPedido);
router.post("/updatePedido", controllerPedidos.updatePedido);
router.post("/deletePedido", controllerPedidos.deletePedido);
router.post("/getPedidosByStatus", controllerPedidos.getPedidosByStatus);
router.post("/getDetallesPedidosByIdPedido", controllerPedidos.getDetallesPedidosByIdPedido);


export default router;
