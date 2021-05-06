const router = require('express').Router();
const apiRoutes = require('./routes/api');
const internalAPIRoute = require('./routes/anime_routes')

router.use('/api', apiRoutes);
router.use('/', internalAPIRoute);

module.exports = router;