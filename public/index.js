const sequelize = require('../config/connection');
// const name_1_example = require('./js folder link');
// const name_2_example = require('./js folder link');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // await name_1_example();

  // await name_2_example();

  process.exit(0);
};

seedAll();
