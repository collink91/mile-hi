// Connects user authorization on activitiesRoutes.js
const authUser = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = authUser;
