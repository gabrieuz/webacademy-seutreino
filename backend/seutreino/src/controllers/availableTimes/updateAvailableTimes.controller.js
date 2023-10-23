import { updateAvailableTimes } from "../../services/availableTimes/updateAvailableTimes.service.js";

const updateAvailableTimesController = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const updateAvailableTime = await updateAvailableTimes(id,data);

    res.status(200).json(updateAvailableTime);


};

export {updateAvailableTimesController}