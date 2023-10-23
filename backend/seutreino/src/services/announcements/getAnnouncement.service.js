import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const getAnnouncement = async () => {
	const announcements = await prisma.announcement.findMany({
		include: {
			gallery: true,
			announcementAvailableTimes: true,
			profession: true,
			professional: true,
			levels: true,
			expertises: true,
		},
	});

	return announcements;
};

export { getAnnouncement };
