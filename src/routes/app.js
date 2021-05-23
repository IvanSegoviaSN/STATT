const express = require('express');
const router = express.Router();

// Game: Brawl Stars
const brawlAPI = require('./games/brawlAPIRoutes');
router.use('/brawl', brawlAPI);

// Game: Clash Royale
const royaleAPI = require('./games/royaleAPIRoutes');
router.use('/royale', royaleAPI);

// Game: Clash of Clans
const clashAPI = require('./games/clashAPIRoutes');
router.use('/clash', clashAPI);

module.exports = router;