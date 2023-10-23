import { Router } from "express";
import { postAppointmentsController } from "../controllers/appointments/postAppointments.controller.js";
import { getAppointmentsController } from "../controllers/appointments/getAppointments.controller.js";

const appointmentsRouter = Router();

appointmentsRouter.post("/", postAppointmentsController);
appointmentsRouter.get("/", getAppointmentsController);

export { appointmentsRouter };
