import { getLevelsService } from "../../services/levels/getLevels.service.js";

const getLevelsController = async (req, res) => {
	const levels = await getLevelsService();
	return res.status(200).json(levels);
};

export {getLevelsController };
