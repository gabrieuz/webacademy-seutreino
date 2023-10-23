import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const postAdministratorService = async (data) => {
	let { name, email, password, isActive, createdAt, updatedAt } = data;

	const existingClient = await prisma.administrator.findUnique({
		where: {
			email: email,
		},
	});

	if (existingClient) {
		throw new AppError("Email already exists", 400);
	}
	if (password) {
		password = await bcrypt.hash(password, 8);
	}

	const newClient = await prisma.administrator.create({
		data: {
			name,
			email,
			password,
			isActive,
			createdAt, 
			updatedAt
		},
	});
	return newClient;
};
export { postAdministratorService };
