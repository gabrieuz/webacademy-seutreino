import { Router } from "express";
import { authAdministratorController} from "../controllers/sessions/administratorSeessions.controller.js"
import { clienProfessionalController } from "../controllers/sessions/clientProfessionalSessions.controller.js";

const loginSessionsRoutes = Router();


loginSessionsRoutes.post("/admin", authAdministratorController)
loginSessionsRoutes.post("/",clienProfessionalController) // autenticação para usuario e profissional

export { loginSessionsRoutes };
