import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const postContactusService = async (data) => {
    let {name, email, phone, role, message} = data;

    const contactus = await prisma.contactus.create({
        data: {name, email, phone, role, message,},
    });
    return contactus;
};
export { postContactusService };