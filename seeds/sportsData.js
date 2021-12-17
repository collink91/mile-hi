const { Sports } = require("../models");

const sportsData = [
  {
    type: "Volley Ball",
    where: "Cheesman Park",
    group_activity: "true",
    description:
      "DU V CUBoulder, bring essentail oils and gluten free snacks, meet at noon this Saturday",
  },
  {
    type: "Football",
    where: "Washington Park",
    group_activity: "true",
    description:
      "Looking for 2 other players to join the Denver Rec Center Football Team this sunday at 2pm",
  },
];

const seedSports = () => Sports.bulkCreate(sportsData);

module.exports = seedSports;
