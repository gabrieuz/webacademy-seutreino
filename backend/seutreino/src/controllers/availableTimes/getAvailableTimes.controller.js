import { getAvailableTimes } from "../../services/availableTimes/getAvailableTimes.service.js";

const getAvailableTimesController = async (req, res) => {

    const availableTimes = await getAvailableTimes();

    res.status(200).json(availableTimes);
};

export { getAvailableTimesController };