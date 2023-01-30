const postService = require('../services/post.service');

const create = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { user } = req;
    const { type, message } = await postService.create(title, content, categoryIds, user);
    if (type) {
        return res.status(400).json({ message });
    }
    res.status(201).json(message);
};

module.exports = {
    create,
};