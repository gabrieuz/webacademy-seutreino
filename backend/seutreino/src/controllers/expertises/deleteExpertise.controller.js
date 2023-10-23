import { deleteExpertiseService } from "../../services/expertises/deleteExpertise.service.js";

const deleteExpertiseController = async (req, res) => {
	const { id } = req.params;
	await deleteExpertiseService(id);
	return res.status(200).send();
};

export { deleteExpertiseController };
