const Activities = require("../models/Activities");
const sportsRenderer = require("../views/sports.handlebars");

// url lands @ http://localhost:3001/sports

// GET all SPORTS activities
module.exports = async (req, res) => {
  try {
    const sporstData = await Activities.find({
      where: { keyword: "Sports" },
    });
    if (!sporstData) {
      res.status(404).json({ message: "No Sports activities found" });
      return;
    }
    // Renders for Handlebars
    res.status(200).render("sports", sporstData);
  } catch (err) {
    res.status(500).json(err);
  }
};
