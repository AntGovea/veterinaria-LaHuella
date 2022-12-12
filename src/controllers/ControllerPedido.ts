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
  updatePedido = async (req: Request, res: Response) => {
    try {
      let { fechaPedido, observaciones, idCliente, idPedido ,estatus} = req.body;
      let querySQL = `UPDATE pedido SET fechaPedido='${fechaPedido}', 
      observaciones='${observaciones}', 
      estatus=${estatus},
      idCliente=${idCliente},
      WHERE idPedido=${idPedido};`;
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

  deleteServicio = async (req: Request, res: Response) => {
    try {
      let {idPedido} = req.body;
      let querySQL = `UPDATE pedido SET estatus=0 WHERE idPedido=${idPedido};`;
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
  getPedidosByStatus = async (req: Request, res: Response) => {
    try {
      let {
        estatus,
      } = req.body;
      let querySQL = `SELECT * FROM pedido WHERE estatus=${estatus} ;`;
  
      let respuesta: any = await execute.query(querySQL);
      if (!respuesta.validacion) {
        res.send({
          code: HttpCodes.error,
          description: respuesta.descripcion,
        });
        return;
      }
  
    
      res.send({
        code: HttpCodes.aceptacion,
        description: descriptions.aceptacion,
        data: respuesta.data,
      });
    } catch (e: any) {
      res.send({
        code: HttpCodes.error,
        description: e.message,
        data: null,
      });
    }
  };

    }