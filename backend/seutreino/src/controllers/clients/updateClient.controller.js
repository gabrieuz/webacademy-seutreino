import { updateClienteService } from "../../services/clients/updateCliente.service.js";

const updateClientController = async (req, res) => {
	const { id } = req.params;
	const data = req.body;

	const updatedClient = await updateClienteService(id, data);

	return res.status(200).json(updatedClient);
};

export { updateClientController };
