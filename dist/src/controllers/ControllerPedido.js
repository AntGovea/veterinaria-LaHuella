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
exports.ControllerPedidos = void 0;
const Types_1 = require("../helpers/Types");
const executeServices_1 = require("../services/executeServices");
let execute = new executeServices_1.Excecute();
class ControllerPedidos {
    constructor() {
        this.getPedidos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let querySQL = `SELECT * FROM viewPedidos;`;
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
        this.addPedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { fechaPedido, observaciones, idCliente, estatus } = req.body;
                let querySQL = `INSERT INTO pedido (fechaPedido,observaciones,idCliente,estatus) VALUES(
        '${fechaPedido}',
        '${observaciones}',
        ${idCliente},
        ${estatus}
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
        this.updatePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { fechaPedido, observaciones, idCliente, idPedido, estatus } = req.body;
                let querySQL = `UPDATE pedido SET fechaPedido='${fechaPedido}', 
      observaciones='${observaciones}', 
      estatus=${estatus},
      idCliente=${idCliente}
      WHERE idPedido=${idPedido};`;
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
        this.deletePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { idPedido } = req.body;
                let querySQL = `UPDATE pedido SET estatus=0 WHERE idPedido=${idPedido};`;
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
        this.getPedidosByStatus = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { estatus, } = req.body;
                let querySQL = `SELECT * FROM viewPedidos WHERE estatus=${estatus} ;`;
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
        this.getDetallesPedidosByIdPedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let { idPedido } = req.body;
            try {
                let querySQL = `SELECT * FROM detallePedido WHERE estatus = 1 AND idPedido = ${idPedido};`;
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
    }
}
exports.ControllerPedidos = ControllerPedidos;
//# sourceMappingURL=ControllerPedido.js.map