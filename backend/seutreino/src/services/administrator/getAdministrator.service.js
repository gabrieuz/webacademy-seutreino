import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAdministratorService = async () => {
	const administrator = await prisma.administrator.findMany();
	return administrator;
};

export { getAdministratorService };
