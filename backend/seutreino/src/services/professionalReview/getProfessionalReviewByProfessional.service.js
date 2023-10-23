import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getProfessionalReviewByProfessional = async (id) => {
	const professionalsReviews= await prisma.professionalReview.findMany({
		where:{
			professionalId: id
		},
		include: {tags: true, client: true}
	})

	return professionalsReviews;
};

export { getProfessionalReviewByProfessional };
