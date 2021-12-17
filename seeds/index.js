const sequelize = require("../config/connection");
const seedOutdoor = require("./outdoorData");
const seedSports = require("./sportsData");

const seedEvents = require("./eventsData");
const seedIndoor = require("./indoorData");
const seedUser = require("./userData");


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedOutdoor();

  await seedSports();


  await seedEvents();

  await seedIndoor();

  await seedUser();


  process.exit(0);
};

seedAll();
