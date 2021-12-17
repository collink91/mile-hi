const sequelize = require("../config/connection");
const seedOutdoor = require("./outdoorData");
const seedSports = require("./sportsData");
const seedUser = require("./userData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedOutdoor();

  await seedSports();

  await seedUser();

  process.exit(0);
};

seedAll();
