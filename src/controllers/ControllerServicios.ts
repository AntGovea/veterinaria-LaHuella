import { Request, Response } from "express";
import { descriptions, HttpCodes } from "../helpers/Types";
import { Excecute } from "../services/executeServices";

let execute = new Excecute();

export class ControllerServicios {
  getServicios = async (req: Request, res: Response) => {
    try {
      let querySQL = `SELECT * FROM vistaServicio;`;
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
  addServicio = async (req: Request, res: Response) => {
    try {
      let { servicio, descripcion, precio, idCategoria, estatus } = req.body;
      let querySQL = `INSERT INTO servicio (servicio,estatus, descripcion, precio, idCategoria) VALUES(
        '${servicio}',
        ${estatus},
        '${descripcion}',
         ${precio},
         ${idCategoria}
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
  updateServicio = async (req: Request, res: Response) => {
    try {
      let { servicio, descripcion, precio, idCategoria, IdServicio ,estatus} = req.body;
      let querySQL = `UPDATE servicio SET servicio='${servicio}', 
      descripcion='${descripcion}', 
      estatus=${estatus},
      precio=${precio},
      idCategoria=${idCategoria}
      WHERE IdServicio=${IdServicio};`;
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
      let {idServicio} = req.body;
      let querySQL = `UPDATE servicio SET estatus=0 WHERE idServicio=${idServicio};`;
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
  getServiciosByStatus = async (req: Request, res: Response) => {
    try {
      let {
        estatus,
      } = req.body;
      let querySQL = `SELECT * FROM servicio WHERE estatus=${estatus} ;`;
  
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
