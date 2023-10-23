import { postTagService } from "../../services/tag/postTag.service.js";

const postTagController = async (req, res) => {
    const data = req.body;

    const newTag = await postTagService(data);

    return res.status(200).json(newTag);
};

export { postTagController };