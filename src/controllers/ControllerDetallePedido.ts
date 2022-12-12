import { Request, Response } from "express";
import { descriptions, HttpCodes } from "../helpers/Types";
import { Excecute } from "../services/executeServices";


let execute = new Excecute();

export class ControllerDetallePedido{

    getDetallesPedidos = async (req: Request, res: Response) => {
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
  
    addDetallePedido = async (req: Request, res: Response) => {
        try {
          let{cantidad,precio,subtotal,idPedido,estatus,idServicio}=req.body;
      let querySQL = `SERT INTO detallePedido(cantidad,precio,subtotal,idPedido,estatus, idServicio)VALUES(
        ${cantidad},
        ${precio},
        ${subtotal},
        ${idPedido},
        ${estatus},
        ${idServicio}
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