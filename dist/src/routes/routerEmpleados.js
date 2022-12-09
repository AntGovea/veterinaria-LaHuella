"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerEmpleado_1 = require("../controllers/ControllerEmpleado");
const controllerEmpleado = new ControllerEmpleado_1.ControllerEmpleado();
const router = (0, express_1.Router)();
//*Roles
router.get("/getAll", controllerEmpleado.getEmpleados);
router.post("/addEmpleado", controllerEmpleado.addEmpleado);
router.post("/updateEmpleado", controllerEmpleado.updateEmpleado);
router.post("/deleteEmpleado", controllerEmpleado.deleteEmpleado);
exports.default = router;
//# sourceMappingURL=routerEmpleados.js.map