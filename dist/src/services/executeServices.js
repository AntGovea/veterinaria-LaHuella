"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Excecute = void 0;
const Connection_1 = require("../db/Connection");
4; //!Metodo para reduccion de codigo de peticiones
class Excecute {
    constructor() {
        // metodo encargado de ejecutar consultas sql que recibe como paramtro, este metodo se repite muchas veces en el codigo de backend - por lo que se creo este
        //m,etodo general que solo si hay algun problema , imprime el rror , la sentencia y devuelve un objeto con la proopiedad validacion en tru
        //si todo salio bien y false si la consulta o la conexion sale mal
        this.query = (sentencial_sql) => {
            try {
                let er;
                return new Promise((resolve, reject) => {
                    Connection_1.pool.getConnection(function (e, connection) {
                        if (e) {
                            console.log('Error al abrir conexion');
                            return reject({
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
                                    return reject({
                                        validacion: false,
                                        descripcion: error.message,
                                    });
                                }
                                else {
                                    console.log(sentencial_sql);
                                    console.log(results);
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
            catch (e) { }
        };
    }
}
exports.Excecute = Excecute;
//# sourceMappingURL=executeServices.js.map