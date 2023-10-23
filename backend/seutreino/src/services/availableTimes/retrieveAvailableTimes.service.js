import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const retrieveAvailableTimes = async (id) => {
    const availableTime = await prisma.availableTimes.findMany({
        where: {
            professionalId: id
        }
    });

    return availableTime;
};

export { retrieveAvailableTimes };