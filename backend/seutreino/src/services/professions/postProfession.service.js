import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const postProfessionService = async (data) => {
  let name = data.name;
  const existingProfession = await prisma.profession.findFirst({
    where: {
      name: name,
    },
  });

  if (existingProfession) {
    throw new AppError("Profession already exists", 400);
  }

  const newProfession = await prisma.profession.create({
    data: {
      name,
    },
  });

  return newProfession;
};

export { postProfessionService };
