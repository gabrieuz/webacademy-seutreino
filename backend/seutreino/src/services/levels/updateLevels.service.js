import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const updateLevelService = async (id, data) => {
	const levels = await prisma.level.findUnique({
		where: {
			id: id,
		},
	});

	if (!levels) {
		throw new AppError("Levels not found.", 404);
	}

	
	const updatedLevels = await prisma.levels.update({
		where: {
			id: client.id,
		},
		data: data,
	});

	return updatedLevels;
};

export { updateLevelService };
