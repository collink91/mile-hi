/*
/
These routes are being called for CREATING (Post) Activities
/
*/

const router = require("express").Router();

const activitiesRoutes = require("./activitiesRoutes");
// Accesses user DB
const userRoutes = require("./userRoutes");

router.use("/activities", activitiesRoutes);
// Accesses user DB
router.use("/user", userRoutes);

module.exports = router;
