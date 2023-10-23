import { Router } from "express";
import { postAvailableTimesController } from "../controllers/availableTimes/postAvailableTimes.controller.js";
import { updateAvailableTimesController } from "../controllers/availableTimes/updateAvailableTimes.controller.js";
import { deleteAvailableTimesController } from "../controllers/availableTimes/deleteAvailableTimes.controller.js";
import { getAvailableTimesController } from "../controllers/availableTimes/getAvailableTimes.controller.js";
import { retrieveAvailableTimesController } from "../controllers/availableTimes/retrieveAvailableTimes.controller.js";

const routesAvailableTimes = Router()

routesAvailableTimes.post("/", postAvailableTimesController);
routesAvailableTimes.patch("/:id",updateAvailableTimesController);
routesAvailableTimes.delete('/:id',deleteAvailableTimesController);
routesAvailableTimes.get("/",getAvailableTimesController);
routesAvailableTimes.get("/:id",retrieveAvailableTimesController);


export { routesAvailableTimes };