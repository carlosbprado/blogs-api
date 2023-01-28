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

const getById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return user;
};

module.exports = {
    createUser,
    getAll,
    getById,
};