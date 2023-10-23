import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getProfessionService = async () => {
	const profession = await prisma.profession.findMany();
	return profession;
};

export { getProfessionService };
