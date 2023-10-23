import express from "express";
import "express-async-errors";
import { errorHandler } from "./src/errors/appError.js"; 
import { clientsRoutes } from "./src/routes/clients.routes.js";
import { professionalsRoutes } from "./src/routes/professional.routes.js";
import { loginSessionsRoutes } from "./src/routes/loginSessions.routes.js";
import cors from "cors";
import { administratorRoutes } from "./src/routes/administrator.routes.js";
import { professionsRoutes } from "./src/routes/profession.routes.js";
import { expertisesRoutes } from "./src/routes/expertise.routes.js";
import { announcementsRoutes } from "./src/routes/announcements.routes.js";
import { levelsRoutes } from "./src/routes/levels.routes.js";
import { contactusRoutes } from "./src/routes/contactus.routes.js";
import { routesAvailableTimes } from "./src/routes/availabletimes.routes.js";
import { dashboardRoutes } from "./src/routes/dashboard.routes.js";
import { tagRoutes } from "./src/routes/tag.routes.js";
import { professionalReviewRoutes } from "./src/routes/professionalReview.routes.js";
import { appointmentsRouter } from "./src/routes/appointments.routes.js";

// Configuração do express
const app = express();
const port = 3000;
// Uso de recursos
app.use(errorHandler);
app.use(express.json());
app.use(cors());

// Rotas
app.use("/clients", clientsRoutes);
app.use("/professionals", professionalsRoutes);
app.use("/login",loginSessionsRoutes);
app.use("/admin",administratorRoutes);
app.use("/professions",professionsRoutes);
app.use("/expertises", expertisesRoutes);
app.use("/announcements", announcementsRoutes);
app.use("/contactus", contactusRoutes);
app.use("/levels", levelsRoutes);
app.use("/availableTimes", routesAvailableTimes);
app.use("/dashboard", dashboardRoutes);
app.use("/tag", tagRoutes);
app.use("/professionalReviews", professionalReviewRoutes);
app.use("/appointments", appointmentsRouter);

app.listen(port, () => {
	console.log(`O servidor está rodando em http://localhost:${port}`);
});
