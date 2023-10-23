import { postClientService } from "../../services/clients/postClient.service.js";

const postClientController = async (req, res) => {
	const data = req.body;

	const newClient = await postClientService(data);

	return res.status(200).json(newClient);
};

export { postClientController };
