import { Request, Response } from "express";
import { descriptions, HttpCodes } from "../helpers/Types";
import { Excecute } from "../services/executeServices";

let execute = new Excecute();

 class ControllerUsuario {

 getUsuarios = async (req: Request, res: Response) => {
    try {
      let querySQL = `SELECT * FROM USUARIO;`;
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
        description: e.message,
        data: null,
      });
    }
  };

  
}

export default ControllerUsuario;