const CategorySchema = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING,
      id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
    },
    {
      tableName: "categories",
      underscored: true,
      timestamps: false,
    }
  );
  return Category;
};

module.exports = CategorySchema;
