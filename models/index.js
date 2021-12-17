const Outdoor = require("./Outdoor");
const Sports = require("./Sports");

const User = require("./User")
const Indoor = require("./Indoor");
const Events = require("./Events")

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

module.exports = { Sports, Outdoor, User, Events, Indoor  };
// { [ADD BRACKETS], [xClass] };

