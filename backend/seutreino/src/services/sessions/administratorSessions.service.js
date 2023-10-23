import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError.js";
const prisma = new PrismaClient();

const authAdministratorService = async (email, password) => {

    const administrator = await prisma.administrator.findUnique({
        where: {
          email: email,
        },
      });
    
      if (!administrator || !bcrypt.compareSync(password, administrator.password)) {
        throw new Error("Invalid credentials");
      }
    
      // Gere um token JWT
      const token = jwt.sign({ AdministratorId: administrator.id }, "secreto", { expiresIn: "1h" });
    
      return token;

};

export { authAdministratorService };
