"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Excecute = void 0;
const config_1 = require("../config");
const Connection_1 = require("../db/Connection");
//!Metodo para reduccion de codigo de peticiones
class Excecute {
    constructor() {
        this.query = (sentencial_sql) => {
            try {
                let er;
                return new Promise((resolve, reject) => {
                    Connection_1.pool.getConnection(function (e, connection) {
                        if (e) {
                            console.log("Error al abrir conexion con la bd");
                            console.log("datos de conexion");
                            console.log(`host${config_1.DB_HOST}`);
                            console.log(`user${config_1.DB_USER}`);
                            console.log(`port${config_1.DB_PORT}`);
                            console.log(`password${config_1.DB_PASSWORD}`);
                            console.log(`database${config_1.DB_NAME}`);
                            console.log(e);
                            return resolve({
                                validacion: false,
                                descripcion: `Error al abrir conexion `,
                                data: null,
                            });
                        }
                        else {
                            connection.query(sentencial_sql, function (error, results, fields) {
                                connection.release();
                                if (error) {
                                    console.log(sentencial_sql);
                                    console.log("error al ejecuatr sentencia slq");
                                    console.log(`*******************************${sentencial_sql}****************************`);
                                    console.log(error.message);
                                    return resolve({
                                        validacion: false,
                                        descripcion: error.message,
                                    });
                                }
                                else {
                                    return resolve({
                                        validacion: true,
                                        descripcion: "consulta exitosa",
                                        data: results,
                                    });
                                }
                            });
                        }
                    });
                }).catch(function (error) {
                    return {
                        validacion: false,
                        descripcion: error.message,
                    };
                });
            }
            catch (e) {
                return {
                    validacion: false,
                    descripcion: e.message,
                };
            }
        };
    }
}
exports.Excecute = Excecute;
//# sourceMappingURL=executeServices.js.map