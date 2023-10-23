import { deleteAvailableTimesService } from "../../services/availableTimes/deleteAvailableTimes.service.js";

const deleteAvailableTimesController = async (req, res) => {
    const { id } = req.params;

    await deleteAvailableTimesService(id);

    res.status(200).send();
    
};

export { deleteAvailableTimesController };