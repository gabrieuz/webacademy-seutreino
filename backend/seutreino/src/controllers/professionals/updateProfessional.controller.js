import { updateProfessionalService } from "../../services/professionals/updateProfessional.service.js";

const updateProfessionalController = async (req, res) => {
	const { id } = req.params;
	const data = req.body;
	const professional = await updateProfessionalService(id, data);
	return res.status(200).json(professional);
};

export { updateProfessionalController };
