/*
/
TO DO (OPTIONAL): Create Search bar routes for GETTING Activities by user-entered values
These routes are being called for GETTING existing Activities
TO DO: Create the necessary routes for other "...Handler"s once Handlebars works
/
*/

const router = require("express").Router();
const outdoorHandler = require("./outdoorRoutes");
// The following routes need to be created once Outdoor Routes works with Handlebars
const indoorHandler = require("./indoorRoutes");
const eventsHandler = require("./eventsRoutes");
const sportsHandler = require(".sportsRoutes");

const apiRoutes = require("./api");

//This links to the individual pages as a GET function (pulling all associated results)
router.get("/outdoor", outdoorHandler);
router.get("/indoor", indoorHandler);
router.get("/events", eventsHandler);
router.get("/sports", sportsHandler);

router.use("/api", apiRoutes);

module.exports = router;
