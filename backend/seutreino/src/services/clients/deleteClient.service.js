import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const deleteClientService = async (id) => {
	const client = await prisma.client.delete({
		where: {
			id: id,
		},
	});

	if (!client) {
		throw new AppError("Client not found", 404);
	}

	return true;
};

export { deleteClientService };
