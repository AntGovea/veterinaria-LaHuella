import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "../config";
import { pool } from "../db/Connection";

 //!Metodo para reduccion de codigo de peticiones
export class Excecute {
  constructor() {}

  query = (sentencial_sql: string) => {
    try {
      let er: any;
      return new Promise((resolve, reject) => {
        pool.getConnection(function (e: any, connection: any) {
          if (e) {
            console.log("Error al abrir conexion con la bd");
            console.log("datos de conexion");
            console.log(`host${DB_HOST}`);
            console.log(`user${DB_USER}`);
            console.log(`port${DB_PORT}`);
            console.log(`password${DB_PASSWORD}`);
            console.log(`database${DB_NAME}`);
            console.log(e);
            return resolve({
              validacion: false,
              descripcion: `Error al abrir conexion `,
              data: null,
            });
          } else {
            connection.query(
              sentencial_sql,
              function (error: any, results: any, fields: any) {
                connection.release();
                if (error) {
                  console.log(sentencial_sql);
                  console.log("error al ejecuatr sentencia slq");
                  console.log(
                    `*******************************${sentencial_sql}****************************`
                  );
                  console.log(error.message);
                  return resolve({
                    validacion: false,
                    descripcion: error.message,
                  });
                } else {
                  return resolve({
                    validacion: true,
                    descripcion: "consulta exitosa",
                    data: results,
                  });
                }
              }
            );
          }
        });
      }).catch(function (error) {
        return {
          validacion: false,
          descripcion: error.message,
        };
      });
    } catch (e: any) {
      return {
        validacion: false,
        descripcion: e.message,
      };
    }
  };
}
