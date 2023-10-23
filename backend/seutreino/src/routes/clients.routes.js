import { Router } from "express";
import { deleteClientController } from "../controllers/clients/deleteClient.controller.js";
import { getClientController } from "../controllers/clients/getClient.controller.js";
import { postClientController } from "../controllers/clients/postClient.controller.js";
import { updateClientController } from "../controllers/clients/updateClient.controller.js";
import { retrieveClientController } from "../controllers/clients/retrieveCliente.controller.js";

const clientsRoutes = Router();

clientsRoutes.patch("/:id", updateClientController);
clientsRoutes.get("/:id", retrieveClientController);
clientsRoutes.delete("/:id", deleteClientController);
clientsRoutes.get("/", getClientController);
clientsRoutes.post("/", postClientController);

export { clientsRoutes };
