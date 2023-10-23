import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const deleteAdministratorService = async (id) => {
	const administratorId = parseInt(id);

	const administrator = await prisma.administrator.delete({
		where: {
			id: administratorId,
		},
	});

	if (!administrator) {
		throw new AppError("Administrator not found.", 404);
	}

	return true;
};

export { deleteAdministratorService };
