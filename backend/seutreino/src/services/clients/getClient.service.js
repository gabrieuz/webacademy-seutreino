import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getClientService = async () => {
	const clients = await prisma.client.findMany();
	return clients;
};

export { getClientService };
