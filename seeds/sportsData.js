const { Sports } = require("../models");

const sportsData = [
  {
    sport_type_id: 1,
    where: "Cheesman Park",
    event_date: "saturday",
    event_time: "12pm",
    group_activity: "true",
    description:
      "DU V CUBoulder, bring essentail oils and gluten free snacks, meet at noon this Saturday",
  },
  {
    sport_type_id: 2,
    where: "Washington Park",
    event_date: "sunday",
    event_time: "2pm",
    group_activity: "true",
    description:
      "Looking for 2 other players to join the Denver Rec Center Football Team this sunday at 2pm",
  },
];

const seedSports = () => Sports.bulkCreate(sportsData);

module.exports = seedSports;
