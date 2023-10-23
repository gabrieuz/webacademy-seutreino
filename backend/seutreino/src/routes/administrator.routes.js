import { Router } from "express";
import { getAdministratorController } from "../controllers/administrator/getAdministrator.controller.js";
import { retrieveAdministratorController } from "../controllers/administrator/retrieveAdministrator.controller.js";
import { updateAdministratorController } from "../controllers/administrator/updateAdministrator.controller.js";
import { deleteAdministratorController } from "../controllers/administrator/deleteAdministrator.controller.js";
import { postAdministratorController } from "../controllers/administrator/postAdministrator.controller.js";

const administratorRoutes = Router();

administratorRoutes.get("/", getAdministratorController);
administratorRoutes.get("/:id",retrieveAdministratorController);
administratorRoutes.patch("/:id",updateAdministratorController);
administratorRoutes.delete("/:id",deleteAdministratorController);
administratorRoutes.post("/", postAdministratorController);

export { administratorRoutes };
