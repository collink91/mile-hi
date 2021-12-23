const router = require("express").Router();

const indoorRoutes = require("./indoorRoutes");
const sportsRoutes = require("../sportsRoutes");
const outdoorRoutes = require("../outdoorRoutes");
const eventsRoutes = require("./eventsRoutes");
// Accesses user DB
const userRoutes = require("./userRoutes");

router.use("/indoor", indoorRoutes);
router.use("/sports", sportsRoutes);
router.use("/outdoor", outdoorRoutes);
router.use("/events", eventsRoutes);
// Accesses user DB
router.use("/user", userRoutes);

module.exports = router;
