"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerClientes_1 = require("../controllers/ControllerClientes");
const controllerClientes = new ControllerClientes_1.ControllerClientes();
const router = (0, express_1.Router)();
//*Roles
router.get("/getAll", controllerClientes.getClientes);
// router.post("/addRol", controllerClientes.addRol);
exports.default = router;
//# sourceMappingURL=routerClientes.js.map