import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const retrieveAdministratorService = async (id) => {
	const administrator = await prisma.administrator.findUnique({
		where: {
			id: id,
		},
	});

	return administrator;
};

export { retrieveAdministratorService };
