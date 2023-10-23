import { Router } from "express";
import { getLevelsController } from "../controllers/levels/getLevels.controller.js";
import { retrieveLevelsController } from "../controllers/levels/retrieveLevels.controller.js";
import { postLevelsController } from "../controllers/levels/postLevels.controller.js";
import { updateLevelsController } from "../controllers/levels/updateLevels.controller.js";
import { deleteLevelsController } from "../controllers/levels/deleteLevels.controller.js";


const levelsRoutes = Router();

levelsRoutes.get("/",getLevelsController);
levelsRoutes.get("/",retrieveLevelsController);
levelsRoutes.post("/",postLevelsController);
levelsRoutes.patch("/:id",updateLevelsController);
levelsRoutes.delete("/:id",deleteLevelsController);


export { levelsRoutes };
