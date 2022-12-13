import { Request, Response } from "express";
import { descriptions, HttpCodes } from "../helpers/Types";
import { Excecute } from "../services/executeServices";

let execute = new Excecute();

export class ControllerDetallePedido {
  getDetallesPedidos = async (req: Request, res: Response) => {
    try {
      let querySQL = `SELECT * FROM detallePedido;`;
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
  getDetallesPedidosByStatus = async (req: Request, res: Response) => {
    try {
      let { estatus} =
      req.body;
      let querySQL = `SELECT * FROM detallePedido WHERE estatus=${estatus};`;
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
      let { cantidad, precio, subtotal, idPedido, estatus, idServicio,idMascota } =
        req.body;
      let querySQL = `INSERT INTO detallePedido(cantidad,precio,subtotal,idPedido,estatus, idServicio,idMascota)VALUES(
        ${cantidad},
        ${precio},
        ${subtotal},
        ${idPedido},
        ${estatus},
        ${idServicio},
        ${idMascota}
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

  updateDetallePedido = async (req: Request, res: Response) => {
    try {
      let {
        cantidad,
        precio,
        subtotal,
        idPedido,
        estatus,
        idServicio,
        IdDetallePedido,
      } = req.body;
      let querySQL = `UPDATE detallePedido SET
      cantidad=${cantidad},
      precio=${precio},
      subtotal=${subtotal},
      idPedido=${idPedido},
      estatus=${estatus},
      idServicio=${idServicio}
        WHERE IdDetallePedido=${IdDetallePedido};`;

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
  deleteDetallePedido = async (req: Request, res: Response) => {
    try {
      let { IdDetallePedido } = req.body;
      let querySQL = `UPDATE detallePedido SET
      estatus=${0}
        WHERE IdDetallePedido=${IdDetallePedido};`;

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
