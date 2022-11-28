import { Request, Response } from "express";
import { descriptions, HttpCodes } from "../helpers/Types";
import { Excecute } from "../services/executeServices";

let execute = new Excecute();

export class ControllerRol {

  getRols = async (req: Request, res: Response) => {
    try {
      console.log('aqui andamos, por que aqui fue donde nos puso la vida XD')
      let querySQL = `SELECT * FROM ROL;`;
      let respuesta: any = await execute.query(querySQL);
      res.status(200).send({
        code: HttpCodes.aceptacion,
        description: descriptions.aceptacion,
        data: respuesta.data,
      });
    } catch (e: any) {
      res.status(500).json({
        code: HttpCodes.error,
        description: e.message,
        data: null,
      });
    }
  };

  
}
