const PostSchema = (sequelize, DataTypes) => {
 const BlogPost = sequelize.define('BlogPost', {
  id: {type: DataTypes.INTEGER, primaryKey: true },
  title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {type: DataTypes.INTEGER, foreignKey: true},
    published: DataTypes.DATE,
    updated: DataTypes.DATE
 }, {
  tableName: 'blog_posts',
  underscored: true,
  timestamps: false,
 })
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  }

  return BlogPost;
};

module.exports = PostSchema;