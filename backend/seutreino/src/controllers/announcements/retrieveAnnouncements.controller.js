import { retrieveAnnouncement } from "../../services/announcements/retrieveAnnouncement.service.js";

const retrieveAnnouncementsController = async (req, res) => {
	const { id } = req.params;
	const announcement = await retrieveAnnouncement(id);
	return res.status(200).json(announcement);
};

export { retrieveAnnouncementsController };
