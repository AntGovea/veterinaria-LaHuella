import { Request, Response } from "express";
import { descriptions, HttpCodes } from "../helpers/Types";
import { Excecute } from "../services/executeServices";

let execute = new Excecute();

export class ControllerRol {

  getRols = async (req: Request, res: Response) => {
    try {
      console.log('aqui andamos, por que aqui fue donde nos puso la vida XD')
      let querySQL = `SELECT * FROM rol;`;
      let respuesta: any = await execute.query(querySQL);

      if (respuesta.validacion) {
        res.send({
          code: HttpCodes.aceptacion,
          description: descriptions.aceptacion,
          data: respuesta.data,
        });
      }else{
        console.log('else de respuesta .validacion')
        res.send({
          code: HttpCodes.error,
          description: respuesta.descripcion,
        });

      }
    } catch (e: any) {
      res.json({
        code: HttpCodes.error,
        description: e,
        data: null,
      });
    }
  };

  
}
