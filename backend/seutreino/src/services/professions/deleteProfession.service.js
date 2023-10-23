import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const deleteProfessionService = async (id) => {

	const professionId = parseInt(id, 10);

  const profession = await prisma.profession.delete({
    where: {
      id: professionId,
    },
  });

  if (!profession) {
    throw new AppError("Profession not found", 404);
  }

  return true;
};

export { deleteProfessionService };
