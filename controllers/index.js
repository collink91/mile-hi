/*
/
TO DO (OPTIONAL): Create Search bar routes for GETTING Activities by user-entered values
/
*/

const router = require("express").Router();

const eventsHandler = require("./eventsRoutes");
const indoorHandler = require("./indoorRoutes");
const outdoorHandler = require("./outdoorRoutes");
const sportsHandler = require("./sportsRoutes");
const userHandler = require("./userRoutes");

const activitiesHandler = require("./api/activitiesRoutes");

//Connects all /api/ routes
const apiRoutes = require("./api");

//This links to the individual pages as a GET function (pulling all associated results)
router.get("/outdoor", outdoorHandler);
router.get("/indoor", indoorHandler);
router.get("/events", eventsHandler);
router.get("/sports", sportsHandler);
router.get("/activities", activitiesHandler);
router.get("/user", userHandler);

router.get("/", (req, res) => res.render("home"));

//This links to the login/sign-up page on the site (or redirects the user if already logged in)
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

//Calls all /api/ routes
router.use("/api", apiRoutes);

module.exports = router;
