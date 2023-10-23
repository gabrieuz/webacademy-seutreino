import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAppointments = async () => {
    const appointments = await prisma.appointment.findMany();
    
    return appointments;
};

export { getAppointments }