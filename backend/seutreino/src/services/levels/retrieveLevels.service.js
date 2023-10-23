import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const retrieveLevelsService = async (id) => {
	const levels = await prisma.level.findUnique({
		where: {
			id: id,
		},
	});

	return levels;
};

export { retrieveLevelsService };
