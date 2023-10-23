import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getExpertiseService = async () => {
	const expertise = await prisma.expertise.findMany();
	return expertise;
};

export { getExpertiseService };
