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
exports.ControllerDetallePedido = void 0;
const Types_1 = require("../helpers/Types");
const executeServices_1 = require("../services/executeServices");
let execute = new executeServices_1.Excecute();
class ControllerDetallePedido {
    constructor() {
        this.getDetallesPedidos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let querySQL = `SELECT * FROM detallePedido;`;
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
        this.getDetallesPedidosByStatus = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { estatus } = req.body;
                let querySQL = `SELECT * FROM detallePedido WHERE estatus=${estatus};`;
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
        this.addDetallePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { cantidad, precio, subtotal, idPedido, estatus, idServicio } = req.body;
                let querySQL = `INSERT INTO detallePedido(cantidad,precio,subtotal,idPedido,estatus, idServicio)VALUES(
        ${cantidad},
        ${precio},
        ${subtotal},
        ${idPedido},
        ${estatus},
        ${idServicio}
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
        this.updateDetallePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { cantidad, precio, subtotal, idPedido, estatus, idServicio, IdDetallePedido, } = req.body;
                let querySQL = `UPDATE detallePedido SET
      cantidad=${cantidad},
      precio=${precio},
      subtotal=${subtotal},
      idPedido=${idPedido},
      estatus=${estatus},
      idServicio=${idServicio}
        WHERE IdDetallePedido=${IdDetallePedido};`;
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
        this.deleteDetallePedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { IdDetallePedido } = req.body;
                let querySQL = `UPDATE detallePedido SET
      estatus=${0}
        WHERE IdDetallePedido=${IdDetallePedido};`;
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
exports.ControllerDetallePedido = ControllerDetallePedido;
//# sourceMappingURL=ControllerDetallePedido.js.map