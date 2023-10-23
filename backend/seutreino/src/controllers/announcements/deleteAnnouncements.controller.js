import { deleteAnnouncement } from "../../services/announcements/deleteAnnouncement.service.js";

const deleteAnnouncementController = async (req, res) => {
    const { id } = req.params;
    await deleteAnnouncement(id);
    return res.status(200).send();
};

export { deleteAnnouncementController };
