import { deleteAdministratorService } from "../../services/administrator/deleteAdministrator.service.js";

const deleteAdministratorController = async (req, res) => {
	const { id } = req.params;
	await deleteAdministratorService(id);
	return res.status(200).send();
};

export { deleteAdministratorController };
