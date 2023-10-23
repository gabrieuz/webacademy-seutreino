import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();
const maxAnnouncements = 99;

const postAnnouncement = async (announcement) => {
	let {
		title,
		description,
		price,
		isActive,
		createdAt,
		updatedAt,
		professionalId,
		expiredAt,
		cep,
		street,
		state,
		city,
		gallery,
		professionId,
		announcementAvailableTimes,
		expertises,
		levels,
	} = announcement;

	const userId = announcement.professionalId;
	expiredAt = new Date(expiredAt).toISOString();
	const userAnnouncementCount = await prisma.announcement.count({
		where: {
			professionalId: userId,
		},
	});

	if (userAnnouncementCount >= maxAnnouncements) {
		throw new AppError("Você já possui o número máximo de anúncios ativos.", 400);
	}

	const newAnnouncement = await prisma.announcement.create({
		data: {
			title,
			description,
			price,
			isActive,
			createdAt,
			updatedAt,
			professionalId,
			expiredAt,
			cep,
			street,
			state,
			city,
			gallery: {
				createMany: {
					data: gallery,
				},
			},
			professionId: professionId,
			announcementAvailableTimes: {
				createMany: {
					data: announcementAvailableTimes,
				},
			},
			expertises: {
				connect: expertises,
			},
			levels: {
				connect: levels,
			},
		},
		include: {
			gallery: true,
			profession: true,
			professional: true,
			levels: true,
			expertises: true,
		},
	});

	return newAnnouncement;
};

export { postAnnouncement };
