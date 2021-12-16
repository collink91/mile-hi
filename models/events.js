const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

/*
NOTE: If we decide to use a login for this section:

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
*/


Events.init(
    {
      id: {
        type: "VarChar(10)",
        // VarChar 100
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.VarChar(10),
        // VarChar 40
        allowNull: false,
      },
      where: {
        type: DataTypes.VarChar(40),
        allowNull: true,
      },
      group_activity: {
        type: DataTypes.boolean,
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
    modelName: 'events',
  }
);

module.exports = Events;
