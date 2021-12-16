const { Outdoor } = require("../models/Outdoor");

const outdoorData = [{}];

const seedOutdoor = () => Outdoor.bulkCreate(outdoorData);

module.exports = seedOutdoor;
