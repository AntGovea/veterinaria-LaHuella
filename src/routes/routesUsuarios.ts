import { Router } from "express";
import ControllerUsuario from "../controllers/ControllerUsuario";

const controllerUsuario = new ControllerUsuario();
const router = Router();

//*Roles
router.get("/getAll", controllerUsuario.getUsuarios);

export default router;
