const router = require("express").Router();
const Activities = require("../../models/Activities");

// url lands @ http://localhost:3001/api/activities

// CREATE a new Outdoor
router.post("/", async (req, res) => {
  const activitiesData = await Activities.create(req.body);

  return res.json(activitiesData);
});

// GET all Outdoor .get
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

// GET a Outdoor  .get
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

// UPDATE a Outdoor   .put
router.put("/:id", async (req, res) => {
  const activitiesData = await Activities.update(
    {
      type: req.body.type,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(outdoorData);
});

// DELETE a Outdoor   .destroy
router.delete("/:id", async (req, res) => {
  const outdoorData = await Activities.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.json(outdoorData);
});

module.exports = router;
