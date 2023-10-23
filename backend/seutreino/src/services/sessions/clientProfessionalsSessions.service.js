import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const clientProfessionalService = async (email, password) => {
    const client = await prisma.client.findUnique({
        where: {
            email: email,
        },
    });

    if (client && bcrypt.compareSync(password, client.password)) {
        const token = jwt.sign({ clientId: client.id }, "secreto", { expiresIn: "1h" });
        return { token, userType: "client", clientId: client.id };
    }

    const professional = await prisma.professional.findUnique({
        where: {
            email: email,
        },
    });

    if (professional && bcrypt.compareSync(password, professional.password)) {
        const token = jwt.sign({ professionalId: professional.id }, "secreto", { expiresIn: "1h" });
        return { token, userType: "professional", professionalId: professional.id };
    }

    throw new Error("Invalid credentials");
};

export { clientProfessionalService };
