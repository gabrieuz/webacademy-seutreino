import { retrieveProfessionalService } from "../../services/professionals/retrieveProfessional.service.js";

const retrieveProfessionalController = async (req, res) => {
	const { id } = req.params;

	const professional = await retrieveProfessionalService(id);

	res.status(200).json(professional);
};

export { retrieveProfessionalController };
