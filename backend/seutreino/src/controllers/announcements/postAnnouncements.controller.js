import { postAnnouncement } from "../../services/announcements/postAnnouncement.service.js";

const postAnnouncementController = async (req, res) => {
    const data = req.body;

    const newAnnouncement = await postAnnouncement(data);

    return res.status(200).json(newAnnouncement);
};

export { postAnnouncementController };
