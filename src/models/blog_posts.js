const PostSchema = (sequelize, DataTypes) => {
 const PostTable = sequelize.define('blog_posts', {
  title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
 }, {
  tableName: 'blog_posts',
  underscored: true,
  timestamps: false,
 })
  return PostTable;
};

module.exports = PostSchema;