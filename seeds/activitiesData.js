/*
All Activities REQUIRE: 
- keyword (Events, Outdoor, Indoor, Sports -- AS STRINGS)
- type (very brief title)
- where (location)
- description

OPTIONAL (btwn where and description):
- event_date
- // // // event_time
- group_activity
*/

const { Activities } = require("../models");

const activitiesData = [
  {
    keyword: "Events",
    type: "Denver PrideFest",
    where: "Downtown Denver",
    event_date: "Two days in June (annually)",
    // // // event_time: ""
    group_activity: "true",
    description:
      "A celebration of community and culture that is welcoming, inclusive and fun to all attendees, regardless of sexual orientation.",
  },
  {
    keyword: "Events",
    type: "Denver Furcon",
    where: "Downtown Denver",
    event_date: "TBD in August 2022",
    // // // event_time: "",
    group_activity: "false",
    description: "Denver's largest Furry Convention. UwU.",
  },
  {
    keyword: "Events",
    type: "Lakeside Amusement Park",
    where: "4601 Sheridan Blvd, Denver",
    event_date: "Open spring -- fall annually",
    // // // event_time: "",
    group_activity: "false",
    description:
      "A community attraction since 1908, home to the famous Twister II wooden roller coaster.",
  },
  {
    keyword: "Indoor",
    type: "Mile High Flea Market",
    where: "I-76 & 88th Ave., Denver",
    event_date: "Open Friday -- Sunday",
    event_time: "7:00 a.m. -- 5:00 p.m.",
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
    // // // event_date:
    // // // event_time:
    group_activity: "false",
    description:
      "Highlights include the ruins of the historic Crags Hotel and a Continental Divide overlook. Prepare for a 3-mile hike.",
  },
  {
    keyword: "Outdoor",
    type: "Bear Creek Lake hike",
    where: "Bear Creek Lake Regional Park",
    // // // event_date: ""
    // // // event_time: ""
    group_activity: "false",
    description:
      "8 miles of trail with great views. Only 14 miles from downtown Denver. Bring water!",
  },
  {
    keyword: "Sports",
    type: "Football",
    where: "Cheeseman Park",
    event_date: "Saturday",
    event_time: "12:00 p.m.",
    group_activity: "true",
    description:
      "DU v. CU-Boulder. Bring essential oils and gluten-free snacks. Tailgate party starts at 10:30 a.m.",
  },
  {
    keyword: "Sports",
    type: "Volleyball",
    where: "Washington Park",
    event_date: "Sunday",
    event_time: "2:00 p.m.",
    group_activity: "true",
    description:
      "Looking for two other players to join the Denver Rec Center Football Team!",
  },
  {
    keyword: "Outdoor",
    type: "Royal Arch hike",
    where: "Boulder",
    // // // event_date: ""
    // // // event_time: ""
    group_activity: false,
    description:
      "A popular 3.1-mile out-and-back trail above Chautauqua with fantastic views over Boulder and the Front Range. Pack plenty of water and sunscreen.",
  },
  {
    keyword: "Sports",
    type: "Rec basketball league",
    where: "Denver",
    // // // event_date: ""
    // // // event_time: ""
    group_activity: false,
    description:
      "Mixtape vape paleo fam. Salvia irony typewriter poke kinfolk. Synth forage chillwave portland normcore cloud bread listicle swag umami austin chia.",
  },

  {
    keyword: "Sports",
    type: "Bowling club",
    where: "Denver",
    // // // event_date: ""
    // // // event_time: ""
    group_activity: false,
    description:
      "Mixtape vape paleo fam. Salvia irony typewriter poke kinfolk. Synth forage chillwave portland normcore cloud bread listicle swag umami austin chia.",
  },
  {
    keyword: "Sports",
    type: "dodgeball",
    where: "Denver",
    // // // event_date: ""
    // // // event_time: ""
    group_activity: false,
    description:
      "Mixtape vape paleo fam. Salvia irony typewriter poke kinfolk. Synth forage chillwave portland normcore cloud bread listicle swag umami austin chia.",
  },
  {
    keyword: "Sports",
    type: "Trail running group",
    where: "Denver",
    // // // event_date: ""
    // // // event_time: ""
    group_activity: false,
    description:
      "Mixtape vape paleo fam. Salvia irony typewriter poke kinfolk. Synth forage chillwave portland normcore cloud bread listicle swag umami austin chia.",
  },
  {
    keyword: "Sports",
    type: "Road cycling club",
    where: "Denver",
    // // // event_date: ""
    // // // event_time: ""
    group_activity: false,
    description:
      "Mixtape vape paleo fam. Salvia irony typewriter poke kinfolk. Synth forage chillwave portland normcore cloud bread listicle swag umami austin chia.",
  },
  {
    keyword: "Sports",
    type: "Pickleball fanatics unite!",
    where: "Denver",
    // // // event_date: ""
    // // // event_time: ""
    group_activity: false,
    description:
      "Mixtape vape paleo fam. Salvia irony typewriter poke kinfolk. Synth forage chillwave portland normcore cloud bread listicle swag umami austin chia.",
  },
  {
    keyword: "Sports",
    type: "Disc Golf 101",
    where: "Denver",
    // // // event_date: ""
    // // // event_time: ""
    group_activity: false,
    description:
      "Mixtape vape paleo fam. Salvia irony typewriter poke kinfolk. Synth forage chillwave portland normcore cloud bread listicle swag umami austin chia.",
  },
  {
    keyword: "Sports",
    type: "Flag football camp",
    where: "Denver",
    // // // event_date: ""
    // // // event_time: ""
    group_activity: false,
    description:
      "Mixtape vape paleo fam. Salvia irony typewriter poke kinfolk. Synth forage chillwave portland normcore cloud bread listicle swag umami austin chia.",
  },
  {
    keyword: "Sports",
    type: "Junior softball league",
    where: "Denver",
    // // // event_date: ""
    // // // event_time: ""
    group_activity: false,
    description:
      "Mixtape vape paleo fam. Salvia irony typewriter poke kinfolk. Synth forage chillwave portland normcore cloud bread listicle swag umami austin chia.",
  },
  {
    keyword: "Sports",
    type: "All-girls' baseball",
    where: "Denver",
    // // // event_date: ""
    // // // event_time: ""
    group_activity: false,
    description:
      "Mixtape vape paleo fam. Salvia irony typewriter poke kinfolk. Synth forage chillwave portland normcore cloud bread listicle swag umami austin chia.",
  },
];

const seedActivities = () => Activities.bulkCreate(activitiesData);

module.exports = seedActivities;
