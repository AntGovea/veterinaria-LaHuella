"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerEmpleado_1 = require("../controllers/ControllerEmpleado");
const controllerEmpleado = new ControllerEmpleado_1.ControllerEmpleado();
const router = (0, express_1.Router)();
//*Roles
router.get("/getAll", controllerEmpleado.getEmpleados);
exports.default = router;
//# sourceMappingURL=routerEmpleados.js.map