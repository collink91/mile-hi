/*

 **This needs a Handlebars template in order to function properly -- TEST FIRST**

 **ONCE THIS IS CONFIRMED AS WORKING: Duplicate for Events, Sports, and Indoor, changing:
 - Keyword (await)
 - 404 message ("No _____ activities found")
 - Render

 */

const Activities = require("../models/Activities");

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
