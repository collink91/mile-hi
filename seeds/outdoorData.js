const { Outdoor } = require("../models");

const outdoorData = [
  {
    type: "Hiking",
    where: "Eldorado Canyon Sate Park",
    event_date: "saturday",
    event_time: "12pm",
    group_activity: "false",
    description:
      "Crags Hotel Ruins and Continental divide Overlook. Prepare for a 3mile hike, ",
  },
  {
    type: "Mountain Biking",
    where: "Bear Creek Lake Regional Park",
    event_date: "saturday",
    event_time: "12pm",
    group_activity: "false",
    description:
      "8miles of trail with great views. only 14miles from downtown. Bring Water!",
  },
];

const seedOutdoor = () => Outdoor.bulkCreate(outdoorData);

module.exports = seedOutdoor;
