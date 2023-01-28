const { User } = require('../models');

const { generateToken } = require('../utils/JWT');

const authLogin = async ({ email, password }) => {
    const user = await User.findOne({
        attributes: ['email', 'password'],
        where: { email, password },
    });
    if (!user) {
       return { type: 'USER_NOT_FOUND' };
    }
    const token = generateToken(user.dataValues);
    return { token };
};

module.exports = {
    authLogin,
};
