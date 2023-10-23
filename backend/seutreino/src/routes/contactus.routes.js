import { Router } from "express";
import { getContactusController } from "../controllers/contactus/getContactus.controller.js";
import { postContactusController } from "../controllers/contactus/postContactus.controller.js";
import { deleteContactusController } from "../controllers/contactus/delete.Contactus.controller.js";



const contactusRoutes = Router();

contactusRoutes.get("/", getContactusController);
contactusRoutes.post("/", postContactusController);
contactusRoutes.delete("/:id", deleteContactusController)

export {contactusRoutes};
