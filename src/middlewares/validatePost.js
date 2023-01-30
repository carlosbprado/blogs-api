const Joi = require('joi');

const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().items(Joi.number()).required(),
});

const validatePost = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) return res.status(400).json({ message: 'Some required fields are missing' });
    next();
};

module.exports = {
    validatePost,
};