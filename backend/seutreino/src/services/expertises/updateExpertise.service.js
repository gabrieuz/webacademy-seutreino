import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const updateExpertiseService = async (id, data) => {
  const expertiseId = parseInt(id, 10);

  const expertise = await prisma.expertise.findUnique({
    where: {
      id: expertiseId,
    },
  });

  if (!expertise) {
    throw new AppError("Expertise not found.", 404);
  }

  const updatedExpertise = await prisma.expertise.update({
    where: {
      id: expertise.id,
    },
    data: data,
  });

  return updatedExpertise;
};

export { updateExpertiseService };
