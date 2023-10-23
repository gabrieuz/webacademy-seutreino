import { retrieveProfessionalReview } from "../../services/professionalReview/retrieveProfessionalReview.service.js";


const retrieveProfessionalReviewController = async (req, res) => {
	const { id } = req.params;

	const professionalReview = await retrieveProfessionalReview(id);

	res.status(200).json(professionalReview);
};

export { retrieveProfessionalReviewController };
