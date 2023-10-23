import { updateAdministratorService } from "../../services/administrator/updateAdministrator.service.js";

const updateAdministratorController = async (req, res) => {
	const { id } = req.params;
	const data = req.body;

	const updateAdministrator = await updateAdministratorService(id, data);

	return res.status(200).json(updateAdministrator);
};

export { updateAdministratorController };
