import { Router } from "express";
import ControllerUsuario from "../controllers/ControllerUsuario";

const controllerUsuario = new ControllerUsuario();
const router = Router();

//*Roles
router.get("/getAll", controllerUsuario.getUsuarios);
router.get("/addUser", controllerUsuario.addUser);

export default router;
