import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();
const postTagService = async (data) => {
    
    let { name } = data;

    const existingTag = await prisma.tag.findFirst({
        where: {
            name: name,
        },
    });

    if (existingTag) {
        throw new AppError("Tag already exists", 400);
    };

    const newTag = await prisma.tag.create({
        data: {
            name,
        },
    });
    return newTag

};

export { postTagService };