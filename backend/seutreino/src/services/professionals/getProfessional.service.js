import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getProfessionalService = async () => {
	const professional = await prisma.professional.findMany();
	return professional;
};

export { getProfessionalService };
