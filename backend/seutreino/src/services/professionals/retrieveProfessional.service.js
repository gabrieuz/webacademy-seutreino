import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const retrieveProfessionalService = async (id) => {
	const professional = await prisma.professional.findUnique({
		where: {
			id: id,
		},
	});

	return professional;
};

export { retrieveProfessionalService };
