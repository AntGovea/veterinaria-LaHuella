import { Request, Response } from "express";
import { descriptions, HttpCodes } from "../helpers/Types";
import { Excecute } from "../services/executeServices";


let execute = new Excecute();

export class ControllerPedidos{

    getPedidos = async (req: Request, res: Response) => {
        try {
      let querySQL = `SELECT * FROM pedido;`;
      let respuesta: any = await execute.query(querySQL);
      if (respuesta.validacion) {
        res.send({
          code: HttpCodes.aceptacion,
          description: descriptions.aceptacion,
          data: respuesta.data,
        });
      } else {
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
    addPedido = async (req: Request, res: Response) => {
        try {
          let{fechaPedido,observaciones,idCliente,estatus}=req.body;
      let querySQL = `INSERT INTO pedido (fechaPedido,observaciones,idCliente,estatus) VALUES(
        '${fechaPedido}',
        '${observaciones}',
        ${idCliente},
        ${estatus}
      );`;
      let respuesta: any = await execute.query(querySQL);
      if (respuesta.validacion) {
        res.send({
          code: HttpCodes.aceptacion,
          description: descriptions.aceptacion,
          data: respuesta.data,
        });
      } else {
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