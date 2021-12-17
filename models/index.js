const Outdoor = require("./Outdoor");
const Sports = require("./Sports");
const User = require("./User");

// const events = require("./events.js");
//const [x] = require('./[modelroute]');

// Key associations
/*
[xClass].hasMany([xClass], {
  foreignKey: "[name]",
});

[xClass].belongsTo([xClass], {
  foreignKey: 'gallery_id',
});
*/

module.exports = { Sports, Outdoor, User };
// { [ADD BRACKETS], [xClass] };
