import { getProfessionalService } from "../../services/professionals/getProfessional.service.js";

const getProfessionalController = async (req, res) => {
	const users = await getProfessionalService();
	return res.status(200).json(users);
};

export { getProfessionalController };
