"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerMascota_1 = require("../controllers/ControllerMascota");
const controllerMascota = new ControllerMascota_1.ControllerMascota();
const router = (0, express_1.Router)();
//*Roles
router.get("/getAll", controllerMascota.getMascotas);
router.post("/addMascota", controllerMascota.addMascota);
router.post("/updateMascota", controllerMascota.updateMascota);
router.post("/deleteMascota", controllerMascota.deleteMascota);
router.post("/getMascotasByStatus", controllerMascota.getMascotasByStatus);
exports.default = router;
//# sourceMappingURL=routesMascotas.js.map