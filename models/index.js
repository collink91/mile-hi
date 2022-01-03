const User = require("./User");
const Activities = require("./Activities");

User.hasMany(Activities, {
  foreignKey: "User_id",
  onDelete: "CASCADE",
});

module.exports = { Activities, User };
