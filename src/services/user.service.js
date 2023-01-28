const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const createUser = async (payload) => {
  const newUser = await User.create(payload);
  const token = generateToken(newUser);
  return { token };
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

module.exports = {
    createUser,
    getAll,
};