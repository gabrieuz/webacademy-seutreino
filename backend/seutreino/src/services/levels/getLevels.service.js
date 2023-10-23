import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getLevelsService = async () => {
	const levels = await prisma.level.findMany();
	return levels;
};

export { getLevelsService };
