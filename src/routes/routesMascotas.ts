import { Router } from "express";
import { ControllerMascota } from "../controllers/ControllerMascota";

const controllerMascota = new ControllerMascota();
const router = Router();

//*Roles
router.get("/getAll", controllerMascota.getMascotas);
router.post("/addMascota", controllerMascota.addMascota);
router.post("/updateMascota", controllerMascota.updateMascota);
router.post("/deleteMascota", controllerMascota.deleteMascota);
router.post("/getMascotasByStatus", controllerMascota.getMascotasByStatus);

export default router;
