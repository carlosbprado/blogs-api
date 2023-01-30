const { Op } = require('sequelize');

const { BlogPost, User, PostCategory, Category } = require('../models');

const create = async (title, content, categoryIds, user) => {
    const { id: userId } = await User.findOne({ where: { email: user.email } });
    const newPost = await BlogPost.create({ title, content, userId });
    const idsCategory = categoryIds.map((id) => ({ postId: newPost.id, categoryId: id }));
    const { count } = await Category.findAndCountAll({
      where: { id: { [Op.in]: categoryIds } },
    });
    if (count !== categoryIds.length) { 
      return { type: 'CATEGORY_NOT_FOUND', message: 'one or more "categoryIds" not found' }; 
}
    await PostCategory.bulkCreate(idsCategory);
    return { type: null, message: newPost };
};

module.exports = {
  create,
};
