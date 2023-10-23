import { getExpertiseService } from "../../services/expertises/getExpertise.service.js";

const getExpertiseController = async (req, res) => {
	const users = await getExpertiseService();
	return res.status(200).json(users);
};

export { getExpertiseController };
