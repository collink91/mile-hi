const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// const bcrypt = require('bcrypt');

/*
// NOTE: If we decide to use a login for this section:

// Add bcrypt const (above) and following commands(?)

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
*/

class Activities extends Model {}

Activities.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    keyword: {
      type: DataTypes.ENUM,
      values: ["Indoor", "Outdoor", "Events", "Sports"],
      allowNull: false,
    },
    type: {
      type: "VARCHAR(60)",
      allowNull: false,
    },
    where: {
      type: "VARCHAR(80)",
      allowNull: false,
    },
    event_date: {
      type: "VARCHAR(40)",
      allowNull: true,
    },
    event_time: {
      type: "VARCHAR(40)",
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Activities",
  }
);

module.exports = Activities;
