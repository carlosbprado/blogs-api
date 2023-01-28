const authService = require('../services/auth.service');

const auth = async (req, res) => {
    const { email, password } = req.body;
    const authentication = await authService.authLogin({ email, password });
    if (authentication.type) return res.status(400).json({ message: 'Invalid fields' }); 
    return res.status(200).json(authentication);
 };

 module.exports = {
    auth,
 };