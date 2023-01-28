const userService = require('../services/user.service');

const createUser = async (req, res) => {
    const newUser = await userService.createUser(req.body);
    return res.status(201).json(newUser);
};

const getAll = async (req, res) => {
    const users = await userService.getAll();
    return res.status(200).json(users);
};

module.exports = {
    createUser,
    getAll,
};