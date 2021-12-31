const router = require("express").Router();
const { Activities } = require("../../models/Activities");
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

(module.exports = authUser), router;

// Updating and Deleting not required; keep in icebox for now

module.exports = router;
