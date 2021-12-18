const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class SportsType extends Model {}

SportsType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: "VARCHAR(20)",
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "SportsType",
    timestamps: false,
  }
);

module.exports = SportsType;
