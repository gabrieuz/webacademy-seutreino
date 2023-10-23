import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const updateAvailableTimes = async (id, data) => {
    const availableTimes = await prisma.availableTimes.findUnique({
        where: {
            id,
        },
    });

    if (!availableTimes) {
        throw new AppError("AvailableTimes not found.", 404);
    }

    const updateAvailableTime = await prisma.availableTimes.update({
        where: {
            id,
        },
        data,
    });

    return updateAvailableTime;
};

export { updateAvailableTimes };
