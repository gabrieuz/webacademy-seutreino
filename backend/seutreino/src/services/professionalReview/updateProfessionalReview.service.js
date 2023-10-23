import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updateProfessionalReview = async (id, data) => {
    const professionalReview = await prisma.professionalReview.findUnique({
        where: {
            id: id
        }
    });
    if (!professionalReview) {
        throw new AppError("ProfessionalReview not found.", 404);
    }
    const updatedProfessionalReview = await prisma.professionalReview.update({
        where: {
            id,
        },
        data,
    });

    return updatedProfessionalReview;

};
export { updateProfessionalReview }