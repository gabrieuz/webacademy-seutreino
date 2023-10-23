import { getAnnouncement } from "../../services/announcements/getAnnouncement.service.js";

const getAnnouncementController = async (req, res) => {
	const announcement = await getAnnouncement();
	return res.status(200).json(announcement);
};

export { getAnnouncementController };
