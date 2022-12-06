"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerUsuario_1 = __importDefault(require("../controllers/ControllerUsuario"));
const controllerUsuario = new ControllerUsuario_1.default();
const router = (0, express_1.Router)();
//*Roles
router.get("/getAll", controllerUsuario.getUsuarios);
router.post("/addUser", controllerUsuario.addUser);
router.post("/getUserById", controllerUsuario.addUser);
exports.default = router;
//# sourceMappingURL=routesUsuarios.js.map