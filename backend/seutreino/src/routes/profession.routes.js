import { Router } from "express";
import { deleteProfessionController } from "../controllers/professions/deleteProfession.controller.js";
import { updateProfessionController } from "../controllers/professions/updateProfession.controller.js";
import { getProfessionController } from "../controllers/professions/getProfession.controller.js";
import { postProfessionController } from "../controllers/professions/postProfession.controller.js";
import { retrieveProfessionController } from "../controllers/professions/retrieveProfession.controller.js";



const professionsRoutes = Router();

professionsRoutes.patch("/:id", updateProfessionController);
professionsRoutes.delete("/:id", deleteProfessionController);
professionsRoutes.get("/", getProfessionController);
professionsRoutes.post("/", postProfessionController);
professionsRoutes.get("/:id",retrieveProfessionController)

export { professionsRoutes };
