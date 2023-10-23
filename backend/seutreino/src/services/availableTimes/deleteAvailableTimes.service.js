import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const deleteAvailableTimesService = async (id) => {
    const availableTime = await prisma.availableTimes.delete({
        where: {
            id: id,
        }
    });

    if (!availableTime) {
        throw new AppError("AvailableTimes not found.", 404);
    }

    return true;
};

export { deleteAvailableTimesService }