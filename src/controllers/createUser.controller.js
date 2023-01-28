const userService = require('../services/createUser.service');

const createUser = async (req, res) => {
    const newUser = await userService.createUser(req.body);
    return res.status(201).json(newUser);
};

module.exports = {
    createUser,
};