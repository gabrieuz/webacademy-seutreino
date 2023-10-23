import { postAdministratorService } from "../../services/administrator/postAdministrator.service.js";

const postAdministratorController = async (req, res) => {
	const data = req.body;

	const newAdministrator = await postAdministratorService(data);

	return res.status(200).json(newAdministrator);
};

export { postAdministratorController };
