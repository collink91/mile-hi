const sequelize = require("../config/connection");
const seedOutdoor = require("./outdoorData");
const seedSports = require("./sportsData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedOutdoor();

  await seedSports();

  process.exit(0);
};

seedAll();
