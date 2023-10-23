import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const updateAnnouncement = async (id, data) => {
    const announcement = await prisma.announcement.findUnique({
        where: {
            id,
        },
    });

    if (!announcement) {
        throw new AppError("Anúncio não encontrado.", 404);
    }

    const updatedAnnouncement = await prisma.announcement.update({
        where: {
            id,
        },
        data,
    });

    return updatedAnnouncement;
};

export { updateAnnouncement };
