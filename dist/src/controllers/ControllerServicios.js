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
exports.ControllerServicios = void 0;
const Types_1 = require("../helpers/Types");
const executeServices_1 = require("../services/executeServices");
let execute = new executeServices_1.Excecute();
class ControllerServicios {
    constructor() {
        this.getServicios = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let querySQL = `SELECT * FROM vistaServicio;`;
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
                    description: e.message,
                    data: null,
                });
            }
        });
        this.addServicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { servicio, descripcion, precio, idCategoria, estatus } = req.body;
                let querySQL = `INSERT INTO servicio (servicio,estatus, descripcion, precio, idCategoria) VALUES(
        '${servicio}',
        ${estatus},
        '${descripcion}',
         ${precio},
         ${idCategoria}
      );`;
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
                    description: e.message,
                    data: null,
                });
            }
        });
        this.updateServicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { servicio, descripcion, precio, idCategoria, IdServicio, estatus } = req.body;
                let querySQL = `UPDATE servicio SET servicio='${servicio}', 
      descripcion='${descripcion}', 
      estatus=${estatus},
      precio=${precio},
      idCategoria=${idCategoria}
      WHERE IdServicio=${IdServicio};`;
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
                    description: e.message,
                    data: null,
                });
            }
        });
        this.deleteServicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { idServicio } = req.body;
                let querySQL = `UPDATE servicio SET estatus=0 WHERE idServicio=${idServicio};`;
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
                    description: e.message,
                    data: null,
                });
            }
        });
        this.getServiciosByStatus = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { estatus, } = req.body;
                let querySQL = `SELECT * FROM vistaServicio WHERE estatus=${estatus} ;`;
                let respuesta = yield execute.query(querySQL);
                if (!respuesta.validacion) {
                    res.send({
                        code: Types_1.HttpCodes.error,
                        description: respuesta.descripcion,
                    });
                    return;
                }
                res.send({
                    code: Types_1.HttpCodes.aceptacion,
                    description: Types_1.descriptions.aceptacion,
                    data: respuesta.data,
                });
            }
            catch (e) {
                res.send({
                    code: Types_1.HttpCodes.error,
                    description: e.message,
                    data: null,
                });
            }
        });
    }
}
exports.ControllerServicios = ControllerServicios;
//# sourceMappingURL=ControllerServicios.js.map