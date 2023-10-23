import { retrieveExpertiseService } from "../../services/expertises/retrieveExpertise.service.js";

const retrieveExpertiseController = async (req, res) => {
	const { id } = req.params;

	const expertise = await retrieveExpertiseService(id);

	res.status(200).json(expertise);
};

export { retrieveExpertiseController };
