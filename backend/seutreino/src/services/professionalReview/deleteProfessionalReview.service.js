import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const deleteProfessionalReview = async (id) => {
	const professionalReview = await prisma.professionalReview.delete({
		where: {
			id: id,
		},
	});

	if (!professionalReview) {
		throw new AppError("ProfessionalReview not found", 404);
	}

	return true;
};

export { deleteProfessionalReview };
