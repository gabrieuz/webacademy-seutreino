import { retrieveLevelsService } from "../../services/levels/retrieveLevels.service.js";

const retrieveLevelsController = async (req, res) => {
	const { id } = req.params;

	const level = await retrieveLevelsService(id);

	res.status(200).json(level);
};

export { retrieveLevelsController };
