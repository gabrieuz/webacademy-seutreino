import { getAppointments } from "../../services/appointments/getAppointments.service.js";

const getAppointmentsController = async (req, res) => {
	const appointments = await getAppointments();

	return res.status(200).json(appointments);
};

export { getAppointmentsController };
