const router = require("express").Router();

// const [name_example] = require("./[name].js_example");

// router.use('/[name].js_example', [name_example]);

const sportsRoutes = require("./sportsRoutes");
const outdoorRoutes = require("./outdoorRoutes");
const userRoutes = require("./userRoutes");

router.use("/sports", sportsRoutes);
router.use("/outdoor", outdoorRoutes);
router.use("/user", userRoutes);

module.exports = router;
