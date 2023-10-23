import { getProfessionService } from "../../services/professions/getProfession.service.js";

const getProfessionController = async (req, res) => {
	const users = await getProfessionService();
	return res.status(200).json(users);
};

export { getProfessionController };
