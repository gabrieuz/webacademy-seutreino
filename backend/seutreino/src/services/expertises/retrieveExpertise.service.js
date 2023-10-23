import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const retrieveExpertiseService = async (id) => {
	const expertise = await prisma.expertise.findUnique({
		where: {
			id: id,
		},
	});

	return expertise;
};

export { retrieveExpertiseService };
