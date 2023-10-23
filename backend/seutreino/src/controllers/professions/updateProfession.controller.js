import { updateProfessionService } from "../../services/professions/updateProfession.service.js";

const updateProfessionController = async (req, res) => {
	const { id } = req.params;
	const data = req.body;
	const profession = await updateProfessionService(id, data);
	return res.status(200).json(profession);
};

export { updateProfessionController };
