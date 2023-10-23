import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const getProfessionalReview = async () => {
    const professionalReviews = await prisma.professionalReview.findMany({
        include: {tags: true}
    });

    return professionalReviews;
}

export { getProfessionalReview };