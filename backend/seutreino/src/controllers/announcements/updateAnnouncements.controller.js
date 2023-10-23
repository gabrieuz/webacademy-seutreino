import { updateAnnouncement } from "../../services/announcements/updateAnnouncement.service.js";

const updateAnnouncementController = async (req, res) => {
	const { id } = req.params;
	const data = req.body;

	const updatedAnnouncement = await updateAnnouncement(id, data);

	return res.status(200).json(updatedAnnouncement);
};

export { updateAnnouncementController };
