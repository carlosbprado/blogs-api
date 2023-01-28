const CategorieSchema = (sequelize, DataTypes) => {
  const CategorieTable = sequelize.define('Category', {
    name: DataTypes.STRING,
    id: {type: DataTypes.INTEGER, primaryKey: true}
  }, {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  })
  return CategorieTable;
};

module.exports = CategorieSchema;