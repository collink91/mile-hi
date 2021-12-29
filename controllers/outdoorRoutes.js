const Activities = require("../models/Activities");

// url lands @ http://localhost:3001/outdoor

// GET all Outdoor activities
module.exports = async (req, res) => {
  try {
    const outdoorData = await Activities.findAll({
      where: { keyword: "Outdoor" },
    });
    const activities = outdoorData.map((activity) =>
      activity.get({ plain: true })
    );
    if (!activities) {
      res.status(404).json({ message: "No Outdoor activities found" });
      return;
    }
    // Renders for Handlebars
    res.status(200).render("outdoor", { activities });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
