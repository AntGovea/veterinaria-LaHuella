"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerDetallePedido_1 = require("../controllers/ControllerDetallePedido");
const controllerDetallePedido = new ControllerDetallePedido_1.ControllerDetallePedido();
const router = (0, express_1.Router)();
//*Roles
router.get("/getAll", controllerDetallePedido.getDetallesPedidos);
router.post("/getDetallesPedidosByStatus", controllerDetallePedido.getDetallesPedidosByStatus);
router.post("/addDetallePedido", controllerDetallePedido.addDetallePedido);
router.post("/updateDetallePedido", controllerDetallePedido.updateDetallePedido);
router.post("/deleteDetallePedido", controllerDetallePedido.deleteDetallePedido);
exports.default = router;
//# sourceMappingURL=routerDetallesPedidos.js.map