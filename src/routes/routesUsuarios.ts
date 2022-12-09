import { Router } from "express";
import ControllerUsuario from "../controllers/ControllerUsuario";

const controllerUsuario = new ControllerUsuario();
const router = Router();

//*Roles
router.get("/getAll", controllerUsuario.getUsuarios);
router.post("/addUser", controllerUsuario.addUser);
router.post("/getUserById", controllerUsuario.addUser);
router.get("/getCredencialesClientes", controllerUsuario.getCredencialesCliente);
router.get("/getCredencialesEmpleados", controllerUsuario.getCredencialesEmpleados);

export default router;
