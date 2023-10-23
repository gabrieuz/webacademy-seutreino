import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const updateClienteService = async (id, data) => {
	const client = await prisma.cliente.findUnique({
		where: {
			id: id,
		},
	});

	if (!client) {
		throw new AppError("Client not found.", 404);
	}

	if (data.password) {
		data.password = await bcrypt.hash(data.password, 8);
	}

	const updatedClient = await prisma.cliente.update({
		where: {
			id: client.id,
		},
		data: data,
	});

	return updatedClient;
};

export { updateClienteService };
