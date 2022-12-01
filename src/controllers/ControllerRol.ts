import { Request, Response } from "express";
import { descriptions, HttpCodes } from "../helpers/Types";
import { Excecute } from "../services/executeServices";

let execute = new Excecute();

export class ControllerRol {

getRols = async (req: Request, res: Response) => {
    try {
      let querySQL = `SELECT * FROM rol;`;
      let respuesta: any = await execute.query(querySQL);

      if (respuesta.validacion) {
        res.send({
          code: HttpCodes.aceptacion,
          description: descriptions.aceptacion,
          data: respuesta.data,
        });
      }else{
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
  addRol = async (req: Request, res: Response) => {
    try {
      let {rol}=req.body;
      let querySQL = `INSERT INTO rol (rol) VALUES ('${rol}');`;
      let respuesta: any = await execute.query(querySQL);

      if (respuesta.validacion) {
        res.send({
          code: HttpCodes.aceptacion,
          description: descriptions.aceptacion,
          data: respuesta.data,
        });
      }else{
        res.send({
          code: HttpCodes.error,
          description: respuesta.descripcion,
        });

      }
    } catch (e: any) {
      res.send({
        code: HttpCodes.error,
        description: e,
        data: null,
      });
    }
  };

  
}
