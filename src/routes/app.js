const express = require('express');
const router = express.Router();

// Game: BrawlStars
const brawlAPI = require('./games/brawlAPIRoutes');
router.use('/brawl', brawlAPI);

module.exports = router;