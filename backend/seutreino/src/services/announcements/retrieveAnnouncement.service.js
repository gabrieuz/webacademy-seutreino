import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const retrieveAnnouncement = async (announcementId) => {
	const announcement = await prisma.announcement.findUnique({
		where: {
			id: announcementId,
		},
		include: {
			gallery: true,
			announcementAvailableTimes: true,
			profession: true,
			professional: true,
			levels: true,
			expertises: true,
		},
	});

	if (!announcement) {
		throw new AppError("Anúncio não encontrado.", 404);
	}

	return announcement;
};

export { retrieveAnnouncement };
