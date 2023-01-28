/* Feito com ajuda do esutante Matheus Campos turma 24A */

const { authToken } = require('../utils/JWT');

const validateToken = async (req, res, next) => {
    const token = req.headers.authorization;
    const user = await authToken(token);
    if (user.message) {
        return res.status(401).json({ message: user.message });
    }
    req.user = user;
    next();
};

module.exports = {
    validateToken,
};