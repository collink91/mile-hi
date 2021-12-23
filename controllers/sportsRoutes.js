const Sports = require("../models/Sports");

// url lands @ http://localhost:3001/sports

// GET all SPORTS activities
module.exports = async (req, res) => {
  try {
    const sportsData = await Sports.findAll();
    if (!sportsData) {
      res.status(404).json({ message: "No sports activities found" });
      return;
    }
    res.status(200).json(sportsData);
  } catch (err) {
    res.status(500).json(err);
  }
};
