import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const postProfessionalService = async (data) => {
	let { name, email, password, gender, birthDate, phone, cep, street, city, state,profilePicture,socialMedia } = data;

	const existingClient = await prisma.professional.findUnique({
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

	const newClient = await prisma.professional.create({
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
export { postProfessionalService };
