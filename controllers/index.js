const router = require("express").Router();

const apiRoutes = require("./api");
//const eventRoutes.js = require("./eventsRoutes")
// Any other .js file routes can be added here
// const [name] = require("./[link.js]");

router.use("/api", apiRoutes);
// router.use("/events", eventRoutes);
// router.use('/', [name]);

module.exports = router;
