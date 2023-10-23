import { getProfessionalReview } from "../../services/professionalReview/getProfessionalReview.service.js";

const getProfessionalReviewController = async (req, res) => {

    const professionalReview = await getProfessionalReview();
    
    return res.status(200).json(professionalReview);
};
export {getProfessionalReviewController}