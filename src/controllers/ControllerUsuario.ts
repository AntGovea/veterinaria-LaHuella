import { Request, Response } from "express";
import { descriptions, HttpCodes } from "../helpers/Types";
import { Excecute } from "../services/executeServices";

let execute = new Excecute();

export class ControllerUsuario {
  getUsuarioById = async (req: Request, res: Response) => {
    let { idUsuario } = req.body;
    try {
      let querySQL = `SELECT * FROM getEmpleados WHERE  idUsuario=${idUsuario};`;
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

  getUsuarios = async (req: Request, res: Response) => {
    try {
      let querySQL = `SELECT * FROM usuarioLogin;`;
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

  addUser = async (req: Request, res: Response) => {
    try {
      let respuesta:any;
      let {
        //*Persona
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
        //*Usuario
        usuario,
        contrasenia,
        estatus = 1,
        //ROl
        idRol,
      } = req.body;

      let querySQLPersona = `INSERT INTO persona( nombre ,
        apellidoPaterno ,
        apellidoMaterno ,
        calle ,
        colonia ,
        numero,
        codigo_postal ,
        fechaNacimiento ,
        genero ,
        telefono ,) VALUES(
         '${nombre}',
         '${apellidoPaterno}',
         '${apellidoMaterno}',
         '${calle}',
         '${colonia}',
         '${numero}',
         '${codigo_postal}',
         '${fechaNacimiento}',
         ${genero},
         '${telefono}'
         );`;
          respuesta= await execute.query(querySQLPersona);
          if(!respuesta.validacion){
            res.send({
              code: HttpCodes.aceptacion,
              description: respuesta.descripcion,
              data: respuesta.data,
            });
          }
      let querySQLUsuario = `INSERT INTO usuarioLogin(usuario,contrasenia,estatus) VALUES(
        '${usuario}',
        '${contrasenia}',
        ${estatus}
        );`;

        respuesta = await execute.query(querySQLUsuario);
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

export default ControllerUsuario;
