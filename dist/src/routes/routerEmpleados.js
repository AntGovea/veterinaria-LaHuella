"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerEmpleados_1 = require("../controllers/ControllerEmpleados");
const controllerEmpleados = new ControllerEmpleados_1.ControllerEmpleados();
const router = (0, express_1.Router)();
//*Roles
router.get("/getAll", controllerEmpleados.getEmpleados);
// router.post("/addRol", controllerClientes.addRol);
exports.default = router;
//# sourceMappingURL=routerEmpleados.js.map