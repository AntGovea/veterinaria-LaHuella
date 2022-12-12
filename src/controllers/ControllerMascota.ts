import { Request, Response } from "express";
import { descriptions, HttpCodes } from "../helpers/Types";
import { Excecute } from "../services/executeServices";

let execute = new Excecute();

export class ControllerMascota {
  getMascotas = async (req: Request, res: Response) => {
    try {
      let querySQL = `SELECT * FROM mascota;`;
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
  addMascota = async (req: Request, res: Response) => {
    try {
      let {
        nombre,
        tipoAnimal,
        raza,
        edad,
        colorPelo,
        peso,
        sexo,
        observaciones,
        idCliente,
        estatus,
      } = req.body;
      let querySQL = `INSERT INTO mascota (nombre,tipoAnimal,raza,edad,colorPelo,peso,sexo,observaciones,idCliente,estatus) VALUES(
        '${nombre}',
        '${tipoAnimal}',
        '${raza}',
        ${edad},
        '${colorPelo}',
        ${peso},
        ${sexo},
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
  updateMascota = async (req: Request, res: Response) => {
    try {
      let {
        idMascota,
        nombre,
        tipoAnimal,
        raza,
        edad,
        colorPelo,
        peso,
        sexo,
        observaciones,
        idCliente,
        estatus
       } =
        req.body;
      let querySQL = `UPDATE mascota SET nombre='${nombre}', 
      tipoAnimal='${tipoAnimal}', 
      raza='${raza}',
      edad=${edad}
      colorPelo='${colorPelo}',
      peso=${peso},
      sexo=${sexo},
      observaciones='${observaciones}',
      idCliente=${idCliente},
      estatus=${estatus}
      WHERE idMascota=${idMascota};`;
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

  deleteMascota = async (req: Request, res: Response) => {
    try {
      let { idMascota } = req.body;
      let querySQL = `UPDATE mascota SET estatus=0 WHERE idMascota=${idMascota};`;
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
  getMascotasByStatus = async (req: Request, res: Response) => {
    try {
      let { estatus } = req.body;
      let querySQL = `SELECT * FROM mascota WHERE estatus=${estatus} ;`;

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
