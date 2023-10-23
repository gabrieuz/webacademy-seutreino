import { retrieveClientService } from "../../services/clients/retrieveClient.service.js";

const retrieveClientController = async (req, res) => {
	const { id } = req.params;

	const client = await retrieveClientService(id);

	res.status(200).json(client);
};

export { retrieveClientController };
