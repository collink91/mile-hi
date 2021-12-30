const router = require("express").Router();
// NOTE: Do we need "restore" here?
const { Activities, restore } = require("../../models/Activities");
// This ensures all new activities are authenticated through user login
const authUser = require("../../utils/auth");

// url lands @ http://localhost:3001/api/activities

// CREATE a new Activity (POST)
router.post("/", authUser, async (req, res) => {
  const body = req.body;

  try {
    const newActivity = await Activities.create({
      ...body,
      userEmail: req.session.email,
    });
    res.json(newActivity);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = authUser;

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
