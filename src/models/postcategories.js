const PostCategorieSchema = (sequelize, DataTypes) => {
 const PostCategorie = sequelize.define('posts_categories', {
  post_id: DataTypes.INTEGER,
  category_id: DataTypes.INTEGER,
 }, {
  tableName: 'PostCategories',
  underscored: true,
 })
 
  return PostCategorie;
};

module.exports = PostCategorieSchema;