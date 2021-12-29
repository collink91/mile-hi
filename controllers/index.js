/*
/
TO DO (OPTIONAL): Create Search bar routes for GETTING Activities by user-entered values
/
*/

const router = require("express").Router();
const outdoorHandler = require("./outdoorRoutes");
const indoorHandler = require("./indoorRoutes");
const eventsHandler = require("./eventsRoutes");
const sportsHandler = require("./sportsRoutes");

const apiRoutes = require("./api");

//This links to the individual pages as a GET function (pulling all associated results)
router.get("/outdoor", outdoorHandler);
router.get("/indoor", indoorHandler);
router.get("/events", eventsHandler);
router.get("/sports", sportsHandler);
router.get("/", (req, res) => res.render("home"));

router.use("/api", apiRoutes);

module.exports = router;
