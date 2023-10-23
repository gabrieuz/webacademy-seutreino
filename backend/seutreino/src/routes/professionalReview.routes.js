import { Router } from "express";
import { postProfessionalReviewController } from "../controllers/professionalReview/postProfessionalReview.controller.js";
import { getProfessionalReviewController } from "../controllers/professionalReview/getProfessionalReview.controller.js";
import { updateProfessionalReviewController } from "../controllers/professionalReview/updateProfessionalReview.controller.js";
import { deleteProfessionalReviewController } from "../controllers/professionalReview/deleteProfessionalReview.controller.js";
import { retrieveProfessionalReviewController } from "../controllers/professionalReview/retrieveProfessionalReview.controller.js";
import { getProfessionalReviewByProfessionalcontroller } from "../controllers/professionalReview/getProfessionalReviewByProfessional.controller.js";


const professionalReviewRoutes = Router();


professionalReviewRoutes.post('/', postProfessionalReviewController);
professionalReviewRoutes.get('/',getProfessionalReviewController);
professionalReviewRoutes.patch('/:id',updateProfessionalReviewController);
professionalReviewRoutes.delete('/:id',deleteProfessionalReviewController);
professionalReviewRoutes.get('/:id',retrieveProfessionalReviewController);
professionalReviewRoutes.get('/byProfessional/:id',getProfessionalReviewByProfessionalcontroller);


export { professionalReviewRoutes };