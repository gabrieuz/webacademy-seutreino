import { postProfessionalService } from "../../services/professionals/postProfessional.service.js";

const postProfessionalController = async (req, res) => {
	const data = req.body;

	const newClient = await postProfessionalService(data);

	return res.status(200).json(newClient);
};

export { postProfessionalController };
