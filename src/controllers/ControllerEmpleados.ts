

// let execute = new Excecute();

// export class ControllerEmpleados{

//     getEmpleados = async (req: Request, res: Response) => {
//         try {
//       let querySQL = `SELECT * FROM getEmpleados;`;
//       let respuesta: any = await execute.query(querySQL);
//       if (respuesta.validacion) {
//         res.send({
//           code: HttpCodes.aceptacion,
//           description: descriptions.aceptacion,
//           data: respuesta.data,
//         });
//       } else {
//         res.send({
//           code: HttpCodes.error,
//           description: respuesta.descripcion,
//         });
//       }
//     } catch (e: any) {
//       res.send({
//         code: HttpCodes.error,
//         description: e.message,
//         data: null,
//       });
//     }
//   };

//     }