"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerRol_1 = require("../controllers/ControllerRol");
const controllerRol = new ControllerRol_1.ControllerRol();
const router = (0, express_1.Router)();
//*Roles
router.get("/getAll", controllerRol.getRols);
exports.default = router;
//# sourceMappingURL=routesRoles.js.map