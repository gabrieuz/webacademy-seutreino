import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getTagService = async () => {
	const tag = await prisma.tag.findMany();
	return tag;
};

export { getTagService };
