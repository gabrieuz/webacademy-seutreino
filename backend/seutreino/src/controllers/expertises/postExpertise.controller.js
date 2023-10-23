import { postExpertiseService } from "../../services/expertises/postExpertise.service.js";

const postExpertiseController = async (req, res) => {
	const data = req.body;

	const newClient = await postExpertiseService(data);

	return res.status(200).json(newClient);
};

export { postExpertiseController };
