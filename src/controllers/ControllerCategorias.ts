import { Request, Response } from "express";
import { descriptions, HttpCodes } from "../helpers/Types";
import { Excecute } from "../services/executeServices";

let execute = new Excecute();

export class ControllerCategorias {
  getCategorias = async (req: Request, res: Response) => {
    try {
      let querySQL = `SELECT * FROM categoria;`;
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
  getCategoriasActivas = async (req: Request, res: Response) => {
    try {
      let querySQL = `SELECT * FROM catAct;`;
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
  getCategoriasInactivas = async (req: Request, res: Response) => {
    try {
      let querySQL = `SELECT * FROM catIna;`;
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

  addCategoria = async (req: Request, res: Response) => {
    try {
      let { categoria, estatus } = req.body;
      let querySQL = `INSERT INTO categoria (categoria,estatus) VALUES ('${categoria}',${estatus});`;
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
        description: e,
        data: null,
      });
    }
  };

  updateCategoria = async (req: Request, res: Response) => {
    try {
      let { categoria, estatus, idCategoria } = req.body;
      let querySQL = `UPDATE categoria SET categoria='${categoria}' , estatus=${estatus} WHERE idCategoria=${idCategoria};`;
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
        description: e,
        data: null,
      });
    }
  };

  deleteCategoria = async (req: Request, res: Response) => {
    try {
      let { idCategoria } = req.body;
      let querySQL = `UPDATE categoria  SET estatus=0 WHERE idCategoria=${idCategoria};`;
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
        description: e,
        data: null,
      });
    }
  };
}
