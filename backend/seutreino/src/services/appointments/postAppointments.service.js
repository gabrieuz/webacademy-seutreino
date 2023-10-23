import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const postAppointmentsService = async (data) => {
	const { date, day, hour, justificative, status, clientId, professionalId } = data;

	const appointmentExists = await prisma.appointment.findFirst({
		where: {
			day,
			hour,
			professionalId,
			status: {
				not: "REJECTED",
			},
		},
	});

	if (appointmentExists) {
		throw new AppError("Appointment already exists.", 409);
	}

	const appointment = await prisma.appointment.create({
		data: {
			date,
			day,
			hour,
			justificative,
			status,
			clientId,
			professionalId,
		},
	});

	if (!appointment) {
		throw new AppError("Error on appointment creation.", 500);
	}

	return appointment;
};

export { postAppointmentsService };
