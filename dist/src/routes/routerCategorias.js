"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerCategorias_1 = require("../controllers/ControllerCategorias");
const controllerCategorias = new ControllerCategorias_1.ControllerCategorias();
const router = (0, express_1.Router)();
//*Roles
router.get("/getAll", controllerCategorias.getCategorias);
router.get("/getAllActivos", controllerCategorias.getCategoriasActivas);
router.get("/getAllInactivos", controllerCategorias.getCategoriasInactivas);
router.post("/addCategoria", controllerCategorias.addCategoria);
router.post("/updateCategoria", controllerCategorias.updateCategoria);
router.post("/deleteCategoria", controllerCategorias.deleteCategoria);
exports.default = router;
//# sourceMappingURL=routerCategorias.js.map