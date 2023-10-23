import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const updateAdministratorService = async (id, data) => {
    id = parseInt(id);
	const administrator = await prisma.administrator.findUnique({
		where: {
			id: id,
		},
	});

	if (!administrator) {
		throw new AppError("Administrator not found.", 404);
	}

	if (data.password) {
		data.password = await bcrypt.hash(data.password, 8);
	}

	const updateAdministrator = await prisma.administrator.update({
		where: {
			id: administrator.id,
		},
		data: data,
	});

	return updateAdministrator;
};

export { updateAdministratorService};
