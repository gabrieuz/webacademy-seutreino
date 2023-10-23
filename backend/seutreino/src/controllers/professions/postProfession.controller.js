import { postProfessionService } from "../../services/professions/postProfession.service.js";

const postProfessionController = async (req, res) => {
	const data = req.body;

	const newClient = await postProfessionService(data);

	return res.status(200).json(newClient);
};

export { postProfessionController };
