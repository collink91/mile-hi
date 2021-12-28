/*
/
All Activities REQUIRE: 
- keyword (Events, Outdoor, Indoor, Sports -- AS STRINGS)
- type (very brief title)
- where (location)
- description

OPTIONAL (btwn where and description):
- event_date
- event_time
- group_activity
/
*/

const { Activities } = require("../models");

const activitiesData = [
  {
    keyword: "Events",
    type: "Denver PrideFest",
    where: "Downtown Denver",
    event_date: "Two days in June (annually)",
    // event_time: "",
    group_activity: "true",
    description:
      "A celebration of community and culture that is welcoming, inclusive and fun to all attendees, regardless of sexual orientation.",
  },
  {
    keyword: "Events",
    type: "Lakeside Amusement Park",
    where: "4601 Sheridan Blvd, Denver",
    event_date: "Open spring -- fall annually",
    // event_time: "",
    group_activity: "false",
    description:
      "A community attraction since 1908, home to the famous Twister II wooden roller coaster.",
  },
  {
    keyword: "Indoor",
    type: "Mile High Flea Market",
    where: "I-76 & 88th Ave., Denver",
    event_date: "Open Friday -- Sunday",
    event_time: "7:00 AM -- 5:00 PM",
    group_activity: "true",
    description: "Home to kiddie rides and thousands of sellers every weekend.",
  },
  {
    keyword: "Indoor",
    type: "Denver Boardgame Night",
    where: "Various locations around downtown Denver",
    event_date: "Every Wednesday",
    event_time: "Generally starts at 6:00 p.m.",
    group_activity: "true",
    description:
      "Established as a meet-up in 2012, this is Denver's go-to for meeting fellow board gamers. Visit www.denvergamenight.com for more info.",
  },
  {
    keyword: "Outdoor",
    type: "Eldorado Canyon hike",
    where: "Eldorado Canyon Sate Park",
    event_date: "saturday",
    event_time: "12pm",
    group_activity: "false",
    description:
      "Crags Hotel Ruins and Continental divide Overlook. Prepare for a 3mile hike, ",
  },
  {
    keyword: "Outdoor",
    type: "Bear Creek Lake hike",
    where: "Bear Creek Lake Regional Park",
    event_date: "saturday",
    event_time: "12pm",
    group_activity: "false",
    description:
      "8miles of trail with great views. only 14miles from downtown. Bring Water!",
  },
  {
    keyword: "Sports",
    type: "DU versus CU football game",
    where: "Cheesman Park",
    event_date: "saturday",
    event_time: "12pm",
    group_activity: "true",
    description:
      "DU V CUBoulder, bring essentail oils and gluten free snacks, meet at noon this Saturday",
  },
  {
    keyword: "Sports",
    type: "Denver Rec football meet",
    where: "Washington Park",
    event_date: "Sunday",
    event_time: "2pm",
    group_activity: "true",
    description:
      "Looking for 2 other players to join the Denver Rec Center Football Team this sunday at 2pm",
  },
  {
    keyword: "Outdoor",
    type: "Royal Arch",
    where: "Boulder",
    event_date: null,
    event_time: null,
    group_activity: false,
    description:
      "A popular 3.1-mile out-and-back trail above Chautauqua with fantastic views over Boulder and the Front Range. Pack plenty of water and sunscreen.",
  },
];

const seedActivities = () => Activities.bulkCreate(activitiesData);

module.exports = seedActivities;
