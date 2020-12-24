const router = require('express').Router();
const userRoutes = require('./userRoutes');

//routes
router.use('/', userRoutes);

module.exports = router;