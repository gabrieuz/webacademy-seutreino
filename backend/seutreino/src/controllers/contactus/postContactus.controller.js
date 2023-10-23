import { postContactusService } from "../../services/contactus/postContactus.service.js";

const postContactusController = async (req, res) => {
    const data = req.body;

    const contactus = await postContactusService(data);

    return res.status(200).json(contactus);
    
};

export { postContactusController };
