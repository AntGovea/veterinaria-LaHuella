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
exports.ControllerUsuario = void 0;
const Types_1 = require("../helpers/Types");
const executeServices_1 = require("../services/executeServices");
let execute = new executeServices_1.Excecute();
class ControllerUsuario {
    constructor() {
        this.getUsuarioById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let { idUsuario } = req.body;
            try {
                let querySQL = `SELECT * FROM getEmpleados WHERE  idUsuario=${idUsuario};`;
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
        this.getUsuarios = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let querySQL = `SELECT * FROM usuarioLogin;`;
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
        this.addUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let respuesta;
                let { 
                //*Persona
                nombre, apellidoPaterno, apellidoMaterno, calle, colonia, numero, codigo_postal, fechaNacimiento, genero, telefono, 
                //*Usuario
                usuario, contrasenia, estatus = 1, 
                //ROl
                idRol, } = req.body;
                let querySQLPersona = `INSERT INTO persona( nombre ,
        apellidoPaterno ,
        apellidoMaterno ,
        calle ,
        colonia ,
        numero,
        codigo_postal ,
        fechaNacimiento ,
        genero ,
        telefono ,) VALUES(
         '${nombre}',
         '${apellidoPaterno}',
         '${apellidoMaterno}',
         '${calle}',
         '${colonia}',
         '${numero}',
         '${codigo_postal}',
         '${fechaNacimiento}',
         ${genero},
         '${telefono}'
         );`;
                respuesta = yield execute.query(querySQLPersona);
                if (!respuesta.validacion) {
                    res.send({
                        code: Types_1.HttpCodes.aceptacion,
                        description: respuesta.descripcion,
                        data: respuesta.data,
                    });
                }
                let querySQLUsuario = `INSERT INTO usuarioLogin(usuario,contrasenia,estatus) VALUES(
        '${usuario}',
        '${contrasenia}',
        ${estatus}
        );`;
                respuesta = yield execute.query(querySQLUsuario);
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
exports.ControllerUsuario = ControllerUsuario;
exports.default = ControllerUsuario;
//# sourceMappingURL=ControllerUsuario.js.map