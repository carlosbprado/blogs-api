const PostCategorieSchema = (sequelize, DataTypes) => {
 const PostCategory = sequelize.define('PostCategory', {
  postId: {type: DataTypes.INTEGER},
  categoryId: {type: DataTypes.INTEGER},
 }, {
  tableName: 'post_categories',
  underscored: true,
  timestamps: false,
 })
 
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id'
    })
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'categoty_id'
    })
  }

  return PostCategory;
};

module.exports = PostCategorieSchema;