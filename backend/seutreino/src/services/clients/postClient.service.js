import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const postClientService = async (data) => {
  let { name, email, password, gender, birthDate, phone, cep, street, city, state,profilePicture,socialMedia } = data;
	
	const existingClient = await prisma.client.findUnique({
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

	birthDate = new Date(birthDate).toISOString();

	const newClient = await prisma.client.create({
		data: {
			name,
			email,
			password,
			gender,
			birthDate,
			phone,
			cep,
			street,
			state,
			city,
			profilePicture,
			socialMedia,
		},
	});
	return newClient;
};
export { postClientService };
