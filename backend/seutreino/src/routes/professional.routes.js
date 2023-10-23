import { Router } from "express";
import { deleteProfessionalController } from "../controllers/professionals/deleteProfessional.controller.js";
import { updateProfessionalController } from "../controllers/professionals/updateProfessional.controller.js";
import { getProfessionalController } from "../controllers/professionals/getProfessional.controller.js";
import { postProfessionalController } from "../controllers/professionals/postProfessional.controller.js";
import { retrieveProfessionalController } from "../controllers/professionals/retrieveProfessional.controller.js";



const professionalsRoutes = Router();

professionalsRoutes.patch("/:id", updateProfessionalController);
professionalsRoutes.delete("/:id", deleteProfessionalController);
professionalsRoutes.get("/:id", retrieveProfessionalController);
professionalsRoutes.get("/", getProfessionalController);
professionalsRoutes.post("/", postProfessionalController);


export { professionalsRoutes };
