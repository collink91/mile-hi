const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../../models/User");

// url lands @ http://localhost:3001/api/user

// CREATE a new user
router.post("/", async (req, res) => {
  try {
    const newUser = req.body;
    // hash the password from 'req.body' and save to newUser
    newUser.password = await bcrypt.hash(req.body.password, 15);
    // create the newUser with the hashed password and save to DB
    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
