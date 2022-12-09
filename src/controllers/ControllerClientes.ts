import { Request, Response } from "express";
import { TRANSACTIONMYSQL } from "../helpers/StartTransaction";
import { descriptions, HttpCodes } from "../helpers/Types";
import { Excecute } from "../services/executeServices";


let execute = new Excecute();
let transaction=new TRANSACTIONMYSQL();
export class ControllerClientes{

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

      let persona:any=[]
      let usuarioData:any=[]
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
      console.log('persona.data',respuesta.data)
      console.log('persona.data[0]',respuesta.data[0])
      console.log('persona.data[0].insertId',respuesta.data[0].insertId)
      console.log('persona.data.ResultSetHeader',respuesta.data.ResultSetHeader)
      console.log('persona.data.ResultSetHeader.insertId',respuesta.data.ResultSetHeader.insertId)
      console.log('persona.data.insertId',respuesta.data.insertId)
 
      // persona=respuesta.data.insertId;
      // querySQL=`INSERT INTO usuarioLogin(usuario,contrasenia,estatus) VALUES(
      //   '${usuario}',
      //   '${contrasenia}',
      //    ${estatus}
      // );`
      //  respuesta = await execute.query(querySQL);
      //  usuario=respuesta.data.ResultSetHeader.insertId;
      // //  usuarioData=respuesta.data[0].insertId;
      //  if (!respuesta.validacion) {
      //    await transaction.rollBackTransaction();
      //    res.send({
      //      code: HttpCodes.error,
      //     description: respuesta.descripcion,
      //   });
      //   return
      // } 
      // console.log(usuarioData)
      // console.log('usuarioData',respuesta.data)
      // // console.log('usuarioData',usuarioData)
      // querySQL=`INSERT INTO cliente(idPersona,idRol,idUsuario) VALUES(
      //    ${persona},
      //    ${idRol},
      //    ${usuarioData}
      // );`
      //  respuesta = await execute.query(querySQL);

      //  if (!respuesta.validacion) {
      //   await transaction.rollBackTransaction();
      //   res.send({
      //     code: HttpCodes.error,
      //     description: respuesta.descripcion,
      //   });
      //   return
      // } 
      // await transaction.commit();
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