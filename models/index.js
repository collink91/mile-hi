
/*
/
THESE MODELS CAN BE DELETED AS NEEDED; REPLACED BY ACTIVITIES
/
*/
SportsType.hasMany(Sports, {
  foreignKey: "id",
  onDelete: "CASCADE",
});


const Outdoor = require("./Outdoor");
const Sports = require("./Sports");
const Indoor = require("./Indoor");
const Events = require("./Events");
//const User = require("./User");

// Removed User from here
// module.exports = { Sports, Outdoor, Indoor, Events };
