const Activities = require("../models/Activities");

// url lands @ http://localhost:3001/indoor

// GET all Indoor activities
module.exports = async (req, res) => {
  try {
    const indoorData = await Activities.findAll({
      where: { keyword: "Indoor" },
    });
    const activities = indoorData.map((activity) =>
      activity.get({ plain: true })
    );
    if (!activities) {
      res.status(404).json({ message: "No Indoor activities found" });
      return;
    }
    // Renders for Handlebars
    res.status(200).render("indoor", { activities });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
