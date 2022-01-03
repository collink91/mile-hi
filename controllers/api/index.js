const router = require("express").Router();

const activitiesRoutes = require("./activitiesRoutes");
const userRoutes = require("./userRoutes");

router.use("/activities", activitiesRoutes);
// Accesses user DB
router.use("/user", userRoutes);

module.exports = router;
