const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Outdoor extends Model {}

Outdoor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: "VARCHAR(10)",
      allowNull: false,
    },
    where: {
      type: "VARCHAR(10)",
      allowNull: false,
    },
    group_activity: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Outdoor",
  }
);

module.exports = Outdoor;
