const CategorieSchema = (sequelize, DataTypes) => {
  const CategorieTable = sequelize.define('categories', {
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    underscored: true,
  })
  return CategorieTable;
};

module.exports = CategorieSchema;