import { updateExpertiseService } from "../../services/expertises/updateExpertise.service.js";

const updateExpertiseController = async (req, res) => {
	const { id } = req.params;
	const data = req.body;
	const expertise = await updateExpertiseService(id, data);
	return res.status(200).json(expertise);
};

export { updateExpertiseController };
