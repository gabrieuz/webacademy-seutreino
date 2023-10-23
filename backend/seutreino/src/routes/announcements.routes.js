import { Router } from "express";

import { postAnnouncementController } from "../controllers/announcements/postAnnouncements.controller.js";
import { deleteAnnouncementController } from "../controllers/announcements/deleteAnnouncements.controller.js";
import { getAnnouncementController } from "../controllers/announcements/getAnnouncements.controller.js";
import { updateAnnouncementController } from "../controllers/announcements/updateAnnouncements.controller.js";
import { retrieveAnnouncementsController } from "../controllers/announcements/retrieveAnnouncements.controller.js";

const announcementsRoutes = Router();

announcementsRoutes.post("/", postAnnouncementController);
announcementsRoutes.delete("/:id", deleteAnnouncementController);
announcementsRoutes.get("/:id", retrieveAnnouncementsController);
announcementsRoutes.put("/:id", updateAnnouncementController);
announcementsRoutes.get("/", getAnnouncementController);

export { announcementsRoutes };
