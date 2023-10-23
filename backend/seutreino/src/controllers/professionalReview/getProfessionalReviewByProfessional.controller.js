import { getProfessionalReviewByProfessional } from "../../services/professionalReview/getProfessionalReviewByProfessional.service.js"; 


const getProfessionalReviewByProfessionalcontroller = async (req, res) => {
	const { id } = req.params;

	const professionalsReviews = await getProfessionalReviewByProfessional(id);

	res.status(200).json(professionalsReviews);
};

export { getProfessionalReviewByProfessionalcontroller };
