const sequelize = require("../config/connection");
const seedOutdoor = require("./outdoorData");
const seedSports = require("./sportsData");
const seedUser = require("./userData");

const seedEvents = require("./eventsData");
const seedIndoor = require("./indoorData");

const seedSportsType = require("./sportsTypeData");
const seedOutdoorType = require("./outdoorTypeData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedOutdoorType();

  await seedSportsType();

  await seedOutdoor();

  await seedSports();

  await seedEvents();

  await seedIndoor();

  await seedUser();

  process.exit(0);
};

seedAll();
