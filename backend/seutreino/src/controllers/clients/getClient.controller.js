import { getClientService } from "../../services/clients/getClient.service.js";

const getClientController = async (req, res) => {
	const users = await getClientService();
	return res.status(200).json(users);
};

export { getClientController };
