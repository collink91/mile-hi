const Outdoor = require("./Outdoor");
const Sports = require("./Sports");
const OutdoorType = require("./OutdoorType");
const SportsType = require("./SportsType");
const User = require("./User");
const Indoor = require("./Indoor");
const Events = require("./Events");

// Key associations, if needed

// Key associations
/*
[xClass].hasMany([xClass], {
  foreignKey: "[name]",
});

[xClass].belongsTo([xClass], {
  foreignKey: 'gallery_id',
});
*/
SportsType.hasMany(Sports, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

OutdoorType.hasMany(Outdoor, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

module.exports = {
  Sports,
  SportsType,
  Outdoor,
  OutdoorType,
  Events,
  Indoor,
  User,
};
// { [ADD BRACKETS], [xClass] };
