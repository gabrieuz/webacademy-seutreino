import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const updateProfessionalService = async (id, data) => {
	const professional = await prisma.professional.findUnique({
		where: {
			id: id,
		},
	});

	if (!professional) {
		throw new AppError("Professional not found.", 404);
	}

	if (data.password) {
		data.password = await bcrypt.hash(data.password, 8);
	}

	const updatedProfessional = await prisma.professional.update({
		where: {
			id: professional.id,
		},
		data: data,
	});

	return updatedProfessional;
};

export { updateProfessionalService };
