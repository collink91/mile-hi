const sequelize = require("../config/connection");

const seedUser = require("./userData");
// All Activities fall under a single table in the database (for streamlined Search bar results)
const seedActivities = require("./activitiesData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedActivities();
  await seedUser();

  process.exit(0);
};

seedAll();
