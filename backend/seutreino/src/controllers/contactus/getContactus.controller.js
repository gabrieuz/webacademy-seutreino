import { getContactusService } from "../../services/contactus/getContactus.service.js";

const getContactusController = async (req, res) => {
	const contactus = await getContactusService();
	return res.status(200).json(contactus);
};

export {getContactusController };
