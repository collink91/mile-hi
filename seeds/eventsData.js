const { Events } = require("../models");

const eventsData = [
  {
    type: "Denver PrideFest",
    where: "Downtown Denver",
    event_date: "Two days in June (annually)",
    // event_time: "",
    group_activity: "true",
    description:
      "A celebration of community and culture that is welcoming, inclusive and fun to all attendees, regardless of sexual orientation.",
  },
  {
    type: "Lakeside Amusement Park",
    where: "4601 Sheridan Blvd, Denver",
    event_date: "Open spring -- fall annually",
    // event_time: "",
    group_activity: "false",
    description:
      "A community attraction since 1908, home to the famous Twister II wooden roller coaster.",
  },
];

const seedEvents = () => Events.bulkCreate(eventsData);

module.exports = seedEvents;
