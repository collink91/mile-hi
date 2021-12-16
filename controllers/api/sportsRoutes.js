const router = require("express").Router();
const Sports = require("../../models/Sports");

// url lands @ http://localhost:3001/sports

// CREATE a new Dep
router.post("/", async (req, res) => {
  const sportsData = await Sports.create(req.body);

  return res.json(sportsData);
});

// GET all SPORT .get
router.get("/", async (req, res) => {
  try {
    const sportsData = await Sports.findAll();
    if (!sportsData) {
      res.status(404).json({ message: "No SPORTS found in Database" });
      return;
    }
    res.status(200).json(sportsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a SPORT  .get
router.get("/id", async (req, res) => {
  try {
    const sportData = await Sports.findByPk(req.params.id);
    if (!sportData) {
      res.status(404).json({ message: "No SPORT with this id!" });
      return;
    }
    res.status(200).json(sportData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a SPORT   .put
router.put("/id", async (req, res) => {
  const sportData = await Sports.update(
    {
      type: req.body.type,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(sportData);
});

// DELETE a SPORT   .destroy
router.delete("/id", async (req, res) => {
  const sportData = await Sports.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.json(sportData);
});

module.exports = router;
