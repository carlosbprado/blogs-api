const userService = require('../services/user.service');

const createUser = async (req, res) => {
    const newUser = await userService.createUser(req.body);
    return res.status(201).json(newUser);
};

const getAll = async (req, res) => {
    const users = await userService.getAll();
    return res.status(200).json(users);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getById(id);
    if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
};

module.exports = {
    createUser,
    getAll,
    getById,
};