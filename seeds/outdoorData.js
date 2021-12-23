const { Outdoor } = require("../models");

const outdoorData = [
  {
    outdoor_type_id: 1,
    where: "Eldorado Canyon Sate Park",
    event_date: "saturday",
    event_time: "12pm",
    group_activity: "false",
    description:
      "Crags Hotel Ruins and Continental divide Overlook. Prepare for a 3mile hike, ",
  },
  {
    outdoor_type_id: 2,
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
