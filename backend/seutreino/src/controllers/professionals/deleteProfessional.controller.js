import { deleteProfessionalService } from "../../services/professionals/deleteProfessional.service.js";

const deleteProfessionalController = async (req, res) => {
	const { id } = req.params;
	await deleteProfessionalService(id);
	return res.status(200).send();
};

export { deleteProfessionalController };
