import { Router } from "express";
import { ControllerDetallePedido } from "../controllers/ControllerDetallePedido";
import { ControllerPedidos } from "../controllers/ControllerPedido";


const controllerDetallePedido = new ControllerDetallePedido();
const router = Router();

//*Roles
router.get("/getAll", controllerDetallePedido.getDetallesPedidos);
router.post("/addPedido", controllerDetallePedido.addDetallePedido);
// router.post("/updatePedido", controllerDetallePedido.updatePedido);
// router.post("/deleteServicio", controllerDetallePedido.deleteServicio);

export default router;
