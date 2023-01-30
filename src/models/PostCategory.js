const PostCategorieSchema = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    "PostCategory",
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
    },
    {
      tableName: "posts_categories",
      underscored: true,
      timestamps: false,
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      foreignKey: "category_id",
      otherKey: "post_id",
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      foreignKey: "post_id",
      otherKey: "category_id",
    });
  };

  return PostCategory;
};

module.exports = PostCategorieSchema;
