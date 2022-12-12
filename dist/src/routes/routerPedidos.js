"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerPedido_1 = require("../controllers/ControllerPedido");
const controllerPedidos = new ControllerPedido_1.ControllerPedidos();
const router = (0, express_1.Router)();
//*Roles
router.get("/getAll", controllerPedidos.getPedidos);
router.post("/addPedido", controllerPedidos.addPedido);
router.post("/updatePedido", controllerPedidos.updatePedido);
router.post("/deleteServicio", controllerPedidos.deleteServicio);
router.post("/getPedidosByStatus", controllerPedidos.getPedidosByStatus);
exports.default = router;
//# sourceMappingURL=routerPedidos.js.map