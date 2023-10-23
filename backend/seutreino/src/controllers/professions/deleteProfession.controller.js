import { deleteProfessionService } from "../../services/professions/deleteProfession.service.js";

const deleteProfessionController = async (req, res) => {
	const { id } = req.params;
	await deleteProfessionService(id);
	return res.status(200).send();
};

export { deleteProfessionController };
