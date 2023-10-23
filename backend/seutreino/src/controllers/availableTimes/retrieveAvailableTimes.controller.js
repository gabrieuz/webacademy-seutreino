import { retrieveAvailableTimes } from "../../services/availableTimes/retrieveAvailableTimes.service.js";

const retrieveAvailableTimesController = async (req, res) => {
    const { id } = req.params;

    const availableTime = await retrieveAvailableTimes(id);

    res.status(200).json(availableTime);
};
export { retrieveAvailableTimesController };