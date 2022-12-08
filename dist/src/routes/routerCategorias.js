"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerCategorias_1 = require("../controllers/ControllerCategorias");
const controllerCategorias = new ControllerCategorias_1.ControllerCategorias();
const router = (0, express_1.Router)();
//*Roles
router.get("/getAll", controllerCategorias.getCategorias);
// router.post("/addRol", controllerClientes.addRol);
exports.default = router;
//# sourceMappingURL=routerCategorias.js.map