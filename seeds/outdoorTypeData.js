const { OutdoorType } = require("../models");

const outdoorTypesData = [
  {
    type: "Hiking",
  },
  {
    type: "Mountain Biking",
  },
];

const seedOutdoorType = () => OutdoorType.bulkCreate(outdoorTypesData);

module.exports = seedOutdoorType;
