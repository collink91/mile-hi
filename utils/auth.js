// Connects user authorization on activitiesRoutes.js
const authUser = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = authUser;
