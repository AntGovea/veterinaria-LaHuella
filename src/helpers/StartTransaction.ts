import { Request, Response } from "express";
import { Excecute } from "../services/executeServices";
import { descriptions, HttpCodes } from "./Types";

let execute = new Excecute();
export class TRANSACTIONMYSQL {
  startTransaction = async () => {
    try {
      let querySQL = `START TRANSACTION;`;
      let respuesta: any = await execute.query(querySQL);

      return respuesta.validacion;
    } catch (e: any) {
      console.log(e);
    }
  };
  rollBackTransaction = async () => {
    try {
        let querySQL = `ROLLBACK;`;
        let respuesta: any = await execute.query(querySQL);
        return respuesta.validacion;
      } catch (e: any) {
        console.log(e);
      }
  };
  
  commit = async () => {
    try {
        let querySQL = `COMMIT;`;
        let respuesta: any = await execute.query(querySQL);
        return respuesta.validacion;
      } catch (e: any) {
        console.log(e);
      }
  };
}
