
const retrieveAdministratorController = async (req, res) => {
	const { id } = req.params;

	const admnistrator = await retrieveAdministratorController(id);

	res.status(200).json(admnistrator);
};

export { retrieveAdministratorController};
