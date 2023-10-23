import { deleteProfessionalReview } from "../../services/professionalReview/deleteProfessionalReview.service.js";

const deleteProfessionalReviewController = async (req, res) => {
    const id = req.params;
    await deleteProfessionalReview(id);

    res.status(200).send();
};

export { deleteProfessionalReviewController };