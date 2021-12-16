const router = require('express').Router();

const apiRoutes = require('./api');
// Any other .js file routes can be added here
// const [name] = require("./[link.js]");

router.use('/api', apiRoutes);
// router.use('/', [name]);

module.exports = router;
