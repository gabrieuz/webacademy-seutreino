import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const updateProfessionService = async (id, data) => {
  const professionId = parseInt(id, 10);

  const profession = await prisma.profession.findUnique({
    where: {
      id: professionId,
    },
  });

  if (!profession) {
    throw new AppError("Profession not found.", 404);
  }

  const updatedProfession = await prisma.profession.update({
    where: {
      id: profession.id,
    },
    data: data,
  });

  return updatedProfession;
};

export { updateProfessionService };
