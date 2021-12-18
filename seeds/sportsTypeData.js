const { SportsType } = require("../models");

const sportsTypeData = [
  {
    type: "Volley Ball",
  },
  {
    type: "Football",
  },
];

const seedSportsType = () => SportsType.bulkCreate(sportsTypeData);

module.exports = seedSportsType;
