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
exports.ControllerClientes = void 0;
const StartTransaction_1 = require("../helpers/StartTransaction");
const Types_1 = require("../helpers/Types");
const executeServices_1 = require("../services/executeServices");
let execute = new executeServices_1.Excecute();
let transaction = new StartTransaction_1.TRANSACTIONMYSQL();
class ControllerClientes {
    constructor() {
        this.getClientes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let querySQL = `SELECT * FROM getClientes;`;
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
        this.addCliente = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let persona = [];
            let usuarioData = [];
            try {
                yield transaction.startTransaction();
                let { 
                //?persona
                nombre, apellidoPaterno, apellidoMaterno, calle, colonia, numero, codigo_postal, fechaNacimiento, genero, telefono, 
                //?usuarioLogin
                usuario, contrasenia, estatus, 
                //?rol
                idRol, } = req.body;
                let querySQL = `INSERT INTO persona ( 
        nombre ,
        apellidoPaterno ,
        apellidoMaterno,
        calle,
        colonia,
        numero ,
        codigo_postal,
        fechaNacimiento,
        genero,
        telefono 
       )
       VALUES(
        '${nombre}',
        '${apellidoPaterno}',
        '${apellidoMaterno}',
        '${calle}',
        '${colonia}',
        '${numero}',
         ${codigo_postal},
         '${fechaNacimiento}',
         ${genero},
         '${telefono}');`;
                let respuesta = yield execute.query(querySQL);
                if (!respuesta.validacion) {
                    yield transaction.rollBackTransaction();
                    res.send({
                        code: Types_1.HttpCodes.error,
                        description: respuesta.descripcion,
                    });
                    return;
                }
                console.log('persona.data', respuesta.data);
                console.log('persona.data.ResultSetHeader', respuesta.data.ResultSetHeader);
                console.log('persona.data.ResultSetHeader.insertId', respuesta.data.ResultSetHeader.insertId);
                console.log('persona.data.insertId', respuesta.data.insertId);
                console.log('persona.data[0].insertId', respuesta.data[0].insertId);
                // persona=respuesta.data.insertId;
                // querySQL=`INSERT INTO usuarioLogin(usuario,contrasenia,estatus) VALUES(
                //   '${usuario}',
                //   '${contrasenia}',
                //    ${estatus}
                // );`
                //  respuesta = await execute.query(querySQL);
                //  usuario=respuesta.data.ResultSetHeader.insertId;
                // //  usuarioData=respuesta.data[0].insertId;
                //  if (!respuesta.validacion) {
                //    await transaction.rollBackTransaction();
                //    res.send({
                //      code: HttpCodes.error,
                //     description: respuesta.descripcion,
                //   });
                //   return
                // } 
                // console.log(usuarioData)
                // console.log('usuarioData',respuesta.data)
                // // console.log('usuarioData',usuarioData)
                // querySQL=`INSERT INTO cliente(idPersona,idRol,idUsuario) VALUES(
                //    ${persona},
                //    ${idRol},
                //    ${usuarioData}
                // );`
                //  respuesta = await execute.query(querySQL);
                //  if (!respuesta.validacion) {
                //   await transaction.rollBackTransaction();
                //   res.send({
                //     code: HttpCodes.error,
                //     description: respuesta.descripcion,
                //   });
                //   return
                // } 
                // await transaction.commit();
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
exports.ControllerClientes = ControllerClientes;
//# sourceMappingURL=ControllerClientes.js.map