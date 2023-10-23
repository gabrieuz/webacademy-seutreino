import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const retrieveClientService = async (id) => {
	const client = await prisma.client.findUnique({
		where: {
			id: id,
		},
	});

	return client;
};

export { retrieveClientService };
