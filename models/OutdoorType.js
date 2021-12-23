const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class OutdoorType extends Model {}

OutdoorType.init(
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
    modelName: "OutdoorType",
    timestamps: false,
  }
);

module.exports = OutdoorType;
