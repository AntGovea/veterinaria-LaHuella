import { Router } from "express";
import { ControllerRol } from "../controllers/ControllerRol";

const controllerRol = new ControllerRol();
const router = Router();

//*Roles
router.get("/getAll", controllerRol.getRols);

export default router;
