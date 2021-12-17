const { Indoor } = require("../models");

const indoorData = [
  {
    type: "Mile High Flea Market",
    where: "I-76 & 88th Ave., Denver",
    event_date: "Open Friday -- Sunday",
    event_time: "7:00 AM -- 5:00 PM",
    group_activity: "true",
    description: "Home to kiddie rides and thousands of sellers every weekend.",
  },
  {
    type: "Denver Boardgame Night",
    where: "Various locations around downtown Denver",
    event_date: "Every Wednesday",
    event_time: "Generally starts at 6:00 p.m.",
    group_activity: "true",
    description:
      "Established as a meet-up in 2012, this is Denver's go-to for meeting fellow board gamers. Visit www.denvergamenight.com for more info.",
  },
];

const seedIndoor = () => Indoor.bulkCreate(indoorData);

module.exports = seedIndoor;
