const Activities = require("../models/Activities");
// This sends the JSON data to a Handlesbars template so it can be generated as HTML
const outdoorRenderer = require("../views/outdoor.handlebars");

// url lands @ http://localhost:3001/outdoor

// GET all Outdoor activities
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
