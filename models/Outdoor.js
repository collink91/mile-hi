/*
/
THIS MODEL CAN BE DELETED AS NEEDED; REPLACED BY ACTIVITIES
/
*/

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
      type: "VARCHAR(15)",
      allowNull: false,
    },
    where: {
      type: "VARCHAR(40)",
      allowNull: false,
    },
    event_date: {
      type: "VARCHAR(15)",
      allowNull: true,
    },
    event_time: {
      type: "VARCHAR(15)",
      allowNull: true,
    },
    group_activity: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
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
    timestamps: false,
  }
);

module.exports = Outdoor;
