/*
/
THIS MODEL CAN BE DELETED AS NEEDED; REPLACED BY ACTIVITIES
/
*/

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
    sport_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "SportsType",
        key: "id",
      },
    },
    where: {
      type: "VARCHAR(40)",
      allowNull: false,
    },
    event_date: {
      type: "VARCHAR(15)",
      allowNull: false,
    },
    event_time: {
      type: "VARCHAR(15)",
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
    timestamps: false,
  }
);

module.exports = Sports;
