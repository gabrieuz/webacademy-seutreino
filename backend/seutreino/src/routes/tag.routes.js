import { Router } from "express";
import { postTagController } from "../controllers/tag/postTag.controller.js";
import { getTagController } from "../controllers/tag/getTag.controller.js";

const tagRoutes = Router();

tagRoutes.post('/', postTagController);
tagRoutes.get('/', getTagController);


export { tagRoutes };