import { Router } from "express";
import { getDashboardDataController } from "../controllers/dashboard/getDashboardData.controller.js"; // Crie o controlador correspondente

const dashboardRoutes = Router();

dashboardRoutes.get("/", getDashboardDataController);

export { dashboardRoutes };
