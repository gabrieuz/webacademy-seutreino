import { deleteLevelService } from "../../services/levels/deleteLevels.service.js";

const deleteLevelsController = async (req, res) => {
	const { id } = req.params;
	await deleteLevelService(id);
	return res.status(200).send();
};

export { deleteLevelsController };
