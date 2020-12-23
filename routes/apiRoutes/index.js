const router = require('express').Router();
const userRoutes = require('./userRoutes');

//routes
router.use('/user', userRoutes);

module.exports = router;