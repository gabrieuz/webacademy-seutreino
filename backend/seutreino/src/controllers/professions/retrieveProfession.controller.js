import { retrieveProfessionService } from "../../services/professions/retrieveProfession.service.js";

const retrieveProfessionController = async (req, res) => {
	const { id } = req.params;

	const profession = await retrieveProfessionService(id);

	res.status(200).json(profession);
};

export { retrieveProfessionController };
