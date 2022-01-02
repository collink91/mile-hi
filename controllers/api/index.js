const router = require("express").Router();

const activitiesRoutes = require("./activitiesRoutes");
const userRoutes = require("./userRoutes");

// Route for adding new activities (URL name references connection to Activities model)
router.use("/activities", activitiesRoutes);
// Calls user DB (no "GET" assigned for "/user")
router.use("/user", userRoutes);

module.exports = router;
