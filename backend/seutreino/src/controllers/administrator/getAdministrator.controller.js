import { getAdministratorService } from "../../services/administrator/getAdministrator.service.js";

const getAdministratorController = async (req, res) => {
	const users = await getAdministratorService();
	return res.status(200).json(users);
};

export { getAdministratorController };
