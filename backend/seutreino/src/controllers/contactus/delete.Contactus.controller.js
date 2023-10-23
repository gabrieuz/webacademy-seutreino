import { deleteContactusService } from "../../services/contactus/deleteContactus.service.js";

const deleteContactusController = async (req, res) => {
    const {id} = req.params;
    await deleteContactusService(id);
    return res.status(200).send();
};

export {deleteContactusController};