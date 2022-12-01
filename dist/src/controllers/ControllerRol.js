"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerRol = void 0;
const Types_1 = require("../helpers/Types");
const executeServices_1 = require("../services/executeServices");
let execute = new executeServices_1.Excecute();
class ControllerRol {
    constructor() {
        this.getRols = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let querySQL = `SELECT * FROM rol;`;
                let respuesta = yield execute.query(querySQL);
                if (respuesta.validacion) {
                    res.send({
                        code: Types_1.HttpCodes.aceptacion,
                        description: Types_1.descriptions.aceptacion,
                        data: respuesta.data,
                    });
                }
                else {
                    res.send({
                        code: Types_1.HttpCodes.error,
                        description: respuesta.descripcion,
                    });
                }
            }
            catch (e) {
                res.json({
                    code: Types_1.HttpCodes.error,
                    description: e,
                    data: null,
                });
            }
        });
        this.addRol = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { rol } = req.body;
                let querySQL = `INSERT INTO rol (rol) VALUES ('${rol}');`;
                let respuesta = yield execute.query(querySQL);
                if (respuesta.validacion) {
                    res.send({
                        code: Types_1.HttpCodes.aceptacion,
                        description: Types_1.descriptions.aceptacion,
                        data: respuesta.data,
                    });
                }
                else {
                    res.send({
                        code: Types_1.HttpCodes.error,
                        description: respuesta.descripcion,
                    });
                }
            }
            catch (e) {
                res.send({
                    code: Types_1.HttpCodes.error,
                    description: e,
                    data: null,
                });
            }
        });
    }
}
exports.ControllerRol = ControllerRol;
//# sourceMappingURL=ControllerRol.js.map