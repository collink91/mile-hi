const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class OutdoorTypes extends Model {}

OutdoorTypes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: "VARCHAR(15)",
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Outdoor",
    timestamps: false,
  }
);

module.exports = OutdoorTypes;
