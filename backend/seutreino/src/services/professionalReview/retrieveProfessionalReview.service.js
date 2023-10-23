import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const retrieveProfessionalReview = async (id) => {
	const professionalReview= await prisma.professionalReview.findUnique({
		where: {
			id: id,
		},
	});

	return professionalReview;
};

export { retrieveProfessionalReview };
