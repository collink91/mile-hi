const { User } = require("../models");

const userData = [
  {
    username: "sample",
    email: "sample@sample.com",
    password: "secret123",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
