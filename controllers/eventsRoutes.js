const Activities = require("../models/Activities");

// url lands @ http://localhost:3001/events

// GET all Events activities
module.exports = async (req, res) => {
  try {
    const eventsData = await Activities.findAll({
      where: { keyword: "Events" },
    });
    const activities = eventsData.map((activity) =>
      activity.get({ plain: true })
    );
    if (!activities) {
      res.status(404).json({ message: "No Events activities found" });
      return;
    }
    // Renders for Handlebars
    res.status(200).render("events", { activities });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
