import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const deleteContactusService = async (id) => {

    const contactus = await prisma.contactus.delete({
        where: {
            id: id
        }
    });

    return true;
};

export { deleteContactusService};