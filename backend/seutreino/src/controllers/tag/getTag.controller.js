import { getTagService } from "../../services/tag/getTag.service.js"; 

const getTagController = async (req, res) => {
	const users = await getTagService();
	return res.status(200).json(users);
};

export { getTagController };
