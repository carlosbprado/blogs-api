const { User } = require('../models');
const { generateToken } = require('../utils/JWT');

const createUser = async (payload) => {
  const newUser = await User.create(payload);
  const token = generateToken(newUser);
  return { token };
};

module.exports = {
    createUser,
};