import { clientProfessionalService } from "../../services/sessions/clientProfessionalsSessions.service.js";

const clienProfessionalController = async (req, res) => {

  const { email, password } = req.body;

  try {
    const data = await clientProfessionalService(email, password);
    return res.json({ data });
  } catch (error) {
    return res.status(401).json({ error: "Authentication failed" });
  }
};
 

export { clienProfessionalController };
