import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const postExpertiseService = async ({ name }) => {

  const existingExpertise = await prisma.expertise.findFirst({
    where: {
      name,
    },
  });

  if (existingExpertise) {
    throw new AppError("Expertise already exists", 400);
  }

  const newExpertise = await prisma.expertise.create({
    data: {
      name,
    },
  });

  return newExpertise;
};

export { postExpertiseService };
