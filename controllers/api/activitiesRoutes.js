const router = require("express").Router();
const Activities = require("../../models/Activities");

// url lands @ http://localhost:3001/api/activities

// CREATE a new Activity (POST)
router.post("/", async (req, res) => {
  /* 
  if (!req.session.loggedIn) {
    // do something different
  }
  */
  const activitiesData = await Activities.create(req.body);

  return res.json(activitiesData);
});

// GET all Activities (GET)
router.get("/", async (req, res) => {
  try {
    const activitiesData = await Activities.findAll();
    if (!activitiesData) {
      res.status(404).json({ message: "No Activities found in Database" });
      return;
    }
    res.status(200).json(activitiesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a specific Activity
router.get("/:id", async (req, res) => {
  try {
    const activitiesData = await Activities.findByPk(req.params.id);
    if (!activitiesData) {
      res.status(404).json({ message: "No Activities with this id!" });
      return;
    }
    res.status(200).json(activitiesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Updating and Deleting not required; keep in icebox for now

module.exports = router;
