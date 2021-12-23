const router = require("express").Router();
const { Activities } = require("../models");

module.exports = async (req, res) => {
  try {
    const outdoorData = await Activities.find({
      where: { keyword: "Outdoor" },
    });
    if (!outdoorData) {
      res.status(404).json({ message: "No Outdoor activities found" });
      return;
    }
    // Renders for Handlebars
    res.status(200).render("outdoor", outdoorData);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = async (req, res) => {
  try {
    const sportsData = await Activities.find({
      where: { keyword: "Sports" },
    });
    if (!sportsData) {
      res.status(404).json({ message: "No Sports activities found" });
      return;
    }
    // Renders for Handlebars
    res.status(200).render("sports", sportsData);
  } catch (err) {
    res.status(500).json(err);
  }
};
module.exports = router;
