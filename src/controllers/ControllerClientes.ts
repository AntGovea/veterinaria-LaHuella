import { Request, Response } from "express";
import { descriptions, HttpCodes } from "../helpers/Types";
import { Excecute } from "../services/executeServices";

let execute = new Excecute();
export class ControllerClientes {
  getClientes = async (req: Request, res: Response) => {
    try {
      let querySQL = `SELECT * FROM getClientes;`;
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
  addCliente = async (req: Request, res: Response) => {
    let persona: any = 0;
    let usuarioData: any = 0;
    try {

      let {
        //?persona
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        calle,
        colonia,
        numero,
        codigo_postal,
        fechaNacimiento,
        genero,
        telefono,
        //?usuarioLogin
        usuario,
        contrasenia,
        estatus,
        //?rol
        idRol,
      } = req.body;
      let querySQL = `INSERT INTO persona ( 
        nombre ,
        apellidoPaterno ,
        apellidoMaterno,
        calle,
        colonia,
        numero ,
        codigo_postal,
        fechaNacimiento,
        genero,
        telefono 
       )
       VALUES(
        '${nombre}',
        '${apellidoPaterno}',
        '${apellidoMaterno}',
        '${calle}',
        '${colonia}',
        '${numero}',
         ${codigo_postal},
         '${fechaNacimiento}',
         ${genero},
         '${telefono}');`;

      let respuesta: any = await execute.query(querySQL);
      if (!respuesta.validacion) {
        res.send({
          code: HttpCodes.error,
          description: respuesta.descripcion,
        });
        return;
      }

      persona = respuesta.data.insertId;
      querySQL = `INSERT INTO usuarioLogin(usuario,contrasenia,estatus) VALUES(
        '${usuario}',
        '${contrasenia}',
         ${estatus}
      );`;
      respuesta = await execute.query(querySQL);
      usuarioData = respuesta.data.insertId;
      if (!respuesta.validacion) {
        res.send({
          code: HttpCodes.error,
          description: respuesta.descripcion,
        });
        return;
      }

      querySQL = `INSERT INTO cliente (idPersona,idRol,idUsuario) VALUES(
         ${persona},
         ${idRol},
         ${usuarioData}
      );`;
      respuesta = await execute.query(querySQL);

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
  updateCliente = async (req: Request, res: Response) => {
   
    try {

      let {
        //?cliente
        idPersona,
        idUsuario,
        //?persona
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        calle,
        colonia,
        numero,
        codigo_postal,
        fechaNacimiento,
        genero,
        telefono,
        //?usuarioLogin
        usuario,
        contrasenia,
        estatus,
        //?rol
        idRol,
      } = req.body;
      let querySQL = `UPDATE persona SET
        nombre='${nombre}',
        apellidoPaterno='${apellidoPaterno}',
        apellidoMaterno='${apellidoMaterno}',
        calle='${calle}',
        colonia='${colonia}',
        numero='${numero}',
        codigo_postal=${codigo_postal},
        fechaNacimiento='${fechaNacimiento}',
        genero=${genero},
        telefono='${telefono}'
        WHERE idPersona=${idPersona};`;

      let respuesta: any = await execute.query(querySQL);
      if (!respuesta.validacion) {
        res.send({
          code: HttpCodes.error,
          description: respuesta.descripcion,
        });
        return;
      }

      querySQL = `UPDATE usuarioLogin SET 
      usuario='${usuario}',
      contrasenia='${contrasenia}',
      estatus=${estatus}
      WHERE idUsuario=${idUsuario};`;
      respuesta = await execute.query(querySQL);
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
  getClientesByStatus = async (req: Request, res: Response) => {
    try {
      let {
        estatus,
      } = req.body;
      let querySQL = `SELECT * FROM getClientes WHERE estatus=${estatus} ;`;

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
  deleteCliente = async (req: Request, res: Response) => {
    try {
      let {
        idUsuario,
      } = req.body;
      let querySQL = `UPDATE usuarioLogin SET 
      estatus=0
      WHERE idUsuario=${idUsuario};`;
     let  respuesta:any = await execute.query(querySQL);
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
  
  getMascotasCliente = async (req: Request, res: Response) => {
    try {

      let {idCliente}=req.body;
      let querySQL = `SELECT * FROM getMascotasCliente WHERE idCliente=${idCliente};`;
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
