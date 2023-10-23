import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const deleteLevelService = async (id) => {
	const levels = await prisma.level.delete({
		where: {
			id: id,
		},
	});

	if (!levels) {
		throw new AppError("Client not found", 404);
	}

	return true;
};

export { deleteLevelService };
