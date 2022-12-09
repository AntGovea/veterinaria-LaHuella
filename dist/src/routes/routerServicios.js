"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerServicios_1 = require("../controllers/ControllerServicios");
const controllerServicios = new ControllerServicios_1.ControllerServicios();
const router = (0, express_1.Router)();
//*Roles
router.get("/getAll", controllerServicios.getServicios);
router.get("/addServicio", controllerServicios.addServicio);
router.get("/updateServicio", controllerServicios.updateServicio);
router.get("/deleteServicio", controllerServicios.deleteServicio);
exports.default = router;
//# sourceMappingURL=routerServicios.js.map