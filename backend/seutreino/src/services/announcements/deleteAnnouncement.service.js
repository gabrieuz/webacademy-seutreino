import { PrismaClient } from "@prisma/client";
import { AppError } from "../../errors/appError.js";

const prisma = new PrismaClient();

const deleteAnnouncement = async (id) => {
	
	const announcement = await prisma.announcement.delete({
		where: {
			id: id,
		},
	});

	if (!announcement) {
		throw new AppError("Announcement not found.", 404);
	}
	return true;
};

export { deleteAnnouncement };
