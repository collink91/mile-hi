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
      type: DataTypes.STRING,
      allowNull: false,
    },
    where: {
      type: DataTypes.STRING,
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
    modelName: "Sports",
  }
);

module.exports = Sports;
