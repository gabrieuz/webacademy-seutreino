import { authAdministratorService } from "../../services/sessions/administratorSessions.service.js";


const authAdministratorController = async (req, res) => {

  const { email, password } = req.body;

  try {
    const token = await authAdministratorService(email, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: "Authentication failed" });
  }
};
 

export { authAdministratorController };
