const { Sports } = require("../models/Sports");

const sportsData = [{}];

const seedSports = () => Sports.bulkCreate(sportsData);

module.exports = seedSports;
