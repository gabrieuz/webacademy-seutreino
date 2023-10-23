import { postProfessionalReview } from "../../services/professionalReview/postProfessionalReview.service.js";

const postProfessionalReviewController = async (req, res) => {
    const data = req.body;

    const newProfessionalReview = await postProfessionalReview(data);

    res.status(200).json(newProfessionalReview);
}

export { postProfessionalReviewController }