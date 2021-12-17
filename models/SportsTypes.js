const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sports extends Model {}

Sports.init(
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
    modelName: "Sports",
    timestamps: false,
  }
);

module.exports = Sports;
