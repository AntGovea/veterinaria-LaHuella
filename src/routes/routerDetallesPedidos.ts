import { Router } from "express";
import { ControllerDetallePedido } from "../controllers/ControllerDetallePedido";
import { ControllerPedidos } from "../controllers/ControllerPedido";


const controllerDetallePedido = new ControllerDetallePedido();
const router = Router();

//*Roles
router.get("/getAll", controllerDetallePedido.getDetallesPedidos);
router.post("/getDetallesPedidosByStatus", controllerDetallePedido.getDetallesPedidosByStatus);
router.post("/addDetallePedido", controllerDetallePedido.addDetallePedido);
router.post("/updateDetallePedido", controllerDetallePedido.updateDetallePedido);
router.post("/deleteDetallePedido", controllerDetallePedido.deleteDetallePedido);

export default router;
