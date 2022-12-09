"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerServicios_1 = require("../controllers/ControllerServicios");
const controllerServicios = new ControllerServicios_1.ControllerServicios();
const router = (0, express_1.Router)();
//*Roles
router.get("/getAll", controllerServicios.getServicios);
router.post("/addServicio", controllerServicios.addServicio);
router.post("/updateServicio", controllerServicios.updateServicio);
router.post("/deleteServicio", controllerServicios.deleteServicio);
exports.default = router;
//# sourceMappingURL=routerServicios.js.map