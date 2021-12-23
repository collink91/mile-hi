/*
/
THIS MODEL CAN BE DELETED AS NEEDED; REPLACED BY ACTIVITIES
/
*/

const { Model, DataTypes } = require("sequelize");
// const bcrypt = require('bcrypt');
const sequelize = require("../config/connection");

/*
NOTE: If we decide to use a login for this section:

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
*/

class Indoor extends Model {}

Indoor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: "VARCHAR(40)",
      allowNull: false,
    },
    where: {
      type: "VARCHAR(40)",
      allowNull: true,
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
    modelName: "Indoor",
  }
);

module.exports = Indoor;
