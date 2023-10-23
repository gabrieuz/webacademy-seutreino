import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const deleteExpertiseService = async (id) => {
  // Converta o id para Int
  const expertiseId = parseInt(id, 10);

  const expertise = await prisma.expertise.delete({
    where: {
      id: expertiseId,
    },
  });

  if (!expertise) {
    throw new AppError("Expertise not found", 404);
  }

  return true;
};

export { deleteExpertiseService };
