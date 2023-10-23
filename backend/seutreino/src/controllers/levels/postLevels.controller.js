import { postLevelService } from "../../services/levels/postLevels.service.js";

const postLevelsController = async (req, res) => {
	const data = req.body;

	const newLevel = await postLevelService(data);

	return res.status(200).json(newLevel);
};

export { postLevelsController };
