const Activities = require("../models/Activities");

// url lands @ http://localhost:3001/sports

// GET all Sports activities
module.exports = async (req, res) => {
  try {
    const sportsData = await Activities.findAll({
      where: { keyword: "Sports" },
    });
    const activities = sportsData.map((activity) =>
      activity.get({ plain: true })
    );
    if (!activities) {
      res.status(404).json({ message: "No Sports activities found" });
      return;
    }
    // Renders for Handlebars
    res.status(200).render("sports", { activities });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
