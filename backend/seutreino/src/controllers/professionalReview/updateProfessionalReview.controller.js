import { updateProfessionalReview } from "../../services/professionalReview/updateProfessionalReview.service.js";

const updateProfessionalReviewController = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const updateprofessionalReview = await updateProfessionalReview(id, data);

    res.status(200).json(updateprofessionalReview);


};

export {updateProfessionalReviewController}