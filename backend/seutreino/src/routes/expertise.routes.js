import { Router } from "express";
import { deleteExpertiseController } from "../controllers/expertises/deleteExpertise.controller.js";
import { updateExpertiseController } from "../controllers/expertises/updateExpertise.controller.js";
import { getExpertiseController } from "../controllers/expertises/getExpertise.controller.js";
import { postExpertiseController } from "../controllers/expertises/postExpertise.controller.js";
import { retrieveExpertiseController } from "../controllers/expertises/retrieveExpertise.controller.js";

const expertisesRoutes = Router();

expertisesRoutes.patch("/:id", updateExpertiseController);
expertisesRoutes.delete("/:id", deleteExpertiseController);
expertisesRoutes.get("/:id", retrieveExpertiseController);
expertisesRoutes.get("/", getExpertiseController);
expertisesRoutes.post("/", postExpertiseController);


export { expertisesRoutes };
