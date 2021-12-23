const router = require("express").Router();

// const indoorHandler =
const apiRoutes = require("./api");
// All non-JSON-modified routes go here (i.e., direct links to each activities page)

router.get("/outdoor", (req, res) => {
  // Either import outdoorRoutes here or put it here directly
});

router.get("/indoor", indoorHandler);

router.use("/api", apiRoutes);

module.exports = router;
