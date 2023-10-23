import { postAvailableTimesService } from "../../services/availableTimes/postAvailableTimes.service.js";

const postAvailableTimesController = async (req, res) => {
    const data = req.body;
    const newAvailableTimes = await postAvailableTimesService(data);
    return res.status(200).json(newAvailableTimes);
};

export { postAvailableTimesController }