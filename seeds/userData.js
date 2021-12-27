/*
/
UPDATED: individualHooks added for pw to be properly hashed
Set {individualHooks: true}
This is NOT a good idea for large databases as it can dramatically impact performance
/
*/
const { User } = require("../models");

const userData = [
  {
    username: "sample",
    email: "sample@email.com",
    password: "secret123",
  },
  {
    username: "sample2",
    email: "sample2@email.com",
    password: "secret345",
  },
];

const seedUser = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUser;
