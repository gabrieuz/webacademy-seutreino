import { updateLevelService } from "../../services/levels/updateLevels.service.js";

const updateLevelsController = async (req, res) => {
	const { id } = req.params;
	const data = req.body;

	const updatedLevels = await updateLevelService(id, data);

	return res.status(200).json(updatedLevels);
};

export { updateLevelsController};
