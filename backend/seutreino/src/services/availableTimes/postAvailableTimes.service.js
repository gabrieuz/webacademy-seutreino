import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const postAvailableTimesService = async (data) => {
	const { day, hour, professionalId } = data;

	const existingAvailableTime = await prisma.availableTimes.findFirst({
		where: {
			day,
			hour,
		},
	});

	if (existingAvailableTime) {
		throw new AppError("AvailableTime already exists", 400);
	}

	const newAvailableTime = await prisma.availableTimes.create({
		data: {
			day,
			hour,
			professionalId
		},
		include: {
			professional: true,
		},
		});

	return newAvailableTime;
};

export { postAvailableTimesService };
