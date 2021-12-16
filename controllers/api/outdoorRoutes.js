const router = require("express").Router();
const Outdoor = require("../../models/Outdoor");

// url lands @ http://localhost:3001/outdoor

// CREATE a new Outdoor
router.post("/", async (req, res) => {
  const outdoorData = await Outdoor.create(req.body);

  return res.json(outdoorData);
});

// GET all Outdoor .get
router.get("/", async (req, res) => {
  try {
    const outdoorData = await Outdoor.findAll();
    if (!outdoorData) {
      res.status(404).json({ message: "No OUTDOORS found in Database" });
      return;
    }
    res.status(200).json(outdoorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a Outdoor  .get
router.get("/id", async (req, res) => {
  try {
    const outdoorData = await Outdoor.findByPk(req.params.id);
    if (!outdoorData) {
      res.status(404).json({ message: "No OUTDOOR with this id!" });
      return;
    }
    res.status(200).json(outdoorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a Outdoor   .put
router.put("/id", async (req, res) => {
  const outdoorData = await Outdoor.update(
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
router.delete("/id", async (req, res) => {
  const outdoorData = await Outdoor.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.json(outdoorData);
});

module.exports = router;
