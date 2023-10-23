import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const postLevelService = async (data) => {
  let { name } = data;

	const existingLevel = await prisma.level.findFirst({
		where: {
			name,
		},
	});

	if (existingLevel) {
		throw new AppError("Level already exists", 400);
	}


	const newLevel = await prisma.level.create({
		data: {
			name,
		},
	});
	return newLevel;
};
export { postLevelService };
