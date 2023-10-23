import { deleteClientService } from "../../services/clients/deleteClient.service.js";

const deleteClientController = async (req, res) => {
	const { id } = req.params;
	await deleteClientService(id);
	return res.status(200).send();
};

export { deleteClientController };
