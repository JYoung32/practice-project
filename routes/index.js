const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

//add routing here
router.use('/api', apiRoutes);

module.exports = router;