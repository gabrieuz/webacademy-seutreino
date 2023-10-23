import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getContactusService = async () => {
	const contactus = await prisma.contactus.findMany();
	return contactus;
};

export { getContactusService };
