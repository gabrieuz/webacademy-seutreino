import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const deleteProfessionalService = async (id) => {
	const professional = await prisma.professional.delete({
		where: {
			id: id,
		},
	});

	if (!professional) {
		throw new AppError("Professional not found.", 404);
	}

	return true;
};

export { deleteProfessionalService };
