const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'outrasenha';

const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
};

const generateToken = ({ email, password }) => 
jwt.sign({ email, password }, TOKEN_SECRET, jwtConfig);

const authToken = async (token) => {
    if (!token) {
        return { message: 'Token not found' };
    }
    try {
        const decrypted = await jwt.verify(token, TOKEN_SECRET);
        return decrypted;
    } catch (err) {
       return { message: 'Expired or invalid token' };
    }
};

module.exports = {
    generateToken,
    authToken,
};