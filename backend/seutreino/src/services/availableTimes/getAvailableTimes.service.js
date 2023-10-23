import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAvailableTimes = async () => {

    const availableTimes = await prisma.availableTimes.findMany();

    return availableTimes;
}

export {getAvailableTimes};