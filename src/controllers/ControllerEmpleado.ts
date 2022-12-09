import { Request, Response } from "express";
import { TRANSACTIONMYSQL } from "../helpers/StartTransaction";
import { Excecute } from "../services/executeServices";
import { descriptions, HttpCodes } from "../types/types";

let execute = new Excecute();
let transaction=new TRANSACTIONMYSQL();

export class ControllerEmpleado{

    getEmpleados = async (req: Request, res: Response) => {
        try {
      let querySQL = `SELECT * FROM getEmpleados;`;
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

  addEmpleado = async (req: Request, res: Response) => {

    let persona:any=0
    let usuarioData:any=0
      try {
        await transaction.startTransaction();

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

            }=req.body;
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
         await transaction.rollBackTransaction();
      res.send({
        code: HttpCodes.error,
        description: respuesta.descripcion,
      });
      return
    } 
    
    persona=respuesta.data.insertId;
    querySQL=`INSERT INTO usuarioLogin(usuario,contrasenia,estatus) VALUES(
      '${usuario}',
      '${contrasenia}',
       ${estatus}
    );`
     respuesta = await execute.query(querySQL);
     usuarioData=respuesta.data.insertId;
     if (!respuesta.validacion) {
       await transaction.rollBackTransaction();
       res.send({
         code: HttpCodes.error,
        description: respuesta.descripcion,
      });
      return
    } 
    
    querySQL=`INSERT INTO empleado (idPersona,idRol,idUsuario) VALUES(
       ${persona},
       ${idRol},
       ${usuarioData}
    );`
     respuesta = await execute.query(querySQL);

     if (!respuesta.validacion) {
      await transaction.rollBackTransaction();
      res.send({
        code: HttpCodes.error,
        description: respuesta.descripcion,
      });
      return
    } 
    await transaction.commit();
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
updateEmpleado = async (req: Request, res: Response) => {
   
  try {
    await transaction.startTransaction();

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
      await transaction.rollBackTransaction();
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
      await transaction.rollBackTransaction();
      res.send({
        code: HttpCodes.error,
        description: respuesta.descripcion,
      });
      return;
    }

    await transaction.commit();
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
deleteEmpleado = async (req: Request, res: Response) => {
  try {
    await transaction.startTransaction();
    let {
      idUsuario,
    } = req.body;
    let querySQL = `UPDATE usuarioLogin SET 
    estatus=0
    WHERE idUsuario=${idUsuario};`;
   let  respuesta:any = await execute.query(querySQL);
    if (!respuesta.validacion) {
      await transaction.rollBackTransaction();
      res.send({
        code: HttpCodes.error,
        description: respuesta.descripcion,
      });
      return;
    }

    await transaction.commit();
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