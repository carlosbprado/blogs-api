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
        const error = new Error('missing auth token');
        error.status = 401;
        throw error;
    }
    try {
        const decrypted = await jwt.verify(token, TOKEN_SECRET);
        return decrypted;
    } catch (err) {
        const error = new Error('jwt malformed');
        error.status = 401;
        throw error;
    }
};

module.exports = {
    generateToken,
    authToken,
};