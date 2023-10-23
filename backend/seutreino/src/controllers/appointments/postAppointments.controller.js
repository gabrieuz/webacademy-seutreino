import { postAppointmentsService } from '../../services/appointments/postAppointments.service.js';

const postAppointmentsController = async (req, res) => {
    const data = req.body;

    const newAppointment = await postAppointmentsService(data);

    return res.status(200).json(newAppointment);
};

export { postAppointmentsController };