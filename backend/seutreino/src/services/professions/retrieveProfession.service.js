import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const retrieveProfessionService = async (id) => {
	const profession = await prisma.profession.findUnique({
		where: {
			id: id,
		},
	});

	return profession;
};

export { retrieveProfessionService };
