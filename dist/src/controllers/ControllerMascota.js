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
exports.ControllerMascota = void 0;
const Types_1 = require("../helpers/Types");
const executeServices_1 = require("../services/executeServices");
let execute = new executeServices_1.Excecute();
class ControllerMascota {
    constructor() {
        this.getMascotas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let querySQL = `SELECT * FROM mascota;`;
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
        this.addMascota = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { nombre, tipoAnimal, raza, edad, colorPelo, peso, sexo, observaciones, idCliente, estatus, } = req.body;
                let querySQL = `INSERT INTO mascota (nombre,tipoAnimal,raza,edad,colorPelo,peso,sexo,observaciones,idCliente,estatus) VALUES(
        '${nombre}',
        '${tipoAnimal}',
        '${raza}',
        ${edad},
        '${colorPelo}',
        ${peso},
        ${sexo},
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
        this.updateMascota = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { idMascota, nombre, tipoAnimal, raza, edad, colorPelo, peso, sexo, observaciones, idCliente, estatus } = req.body;
                let querySQL = `UPDATE mascota SET nombre='${nombre}', 
      tipoAnimal='${tipoAnimal}', 
      raza='${raza}',
      edad=${edad},
      colorPelo='${colorPelo}',
      peso=${peso},
      sexo=${sexo},
      observaciones='${observaciones}',
      idCliente=${idCliente},
      estatus=${estatus}
      WHERE idMascota=${idMascota};`;
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
        this.deleteMascota = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { idMascota } = req.body;
                let querySQL = `UPDATE mascota SET estatus=0 WHERE idMascota=${idMascota};`;
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
        this.getMascotasByStatus = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { estatus } = req.body;
                let querySQL = `SELECT * FROM mascota WHERE estatus=${estatus} ;`;
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
exports.ControllerMascota = ControllerMascota;
//# sourceMappingURL=ControllerMascota.js.map