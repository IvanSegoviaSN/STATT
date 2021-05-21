const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get('/:id', async (req, res) => {
    const header = {
        'Content-Type': 'application/json'
    }

    // https://api.statt.es/api/games/brawl/${req.params.id}`
    const response = await axios(`https://api.statt.es/api/games/brawl/${req.params.id}`).catch(err => res.send('Client: ' + err));

    await res.send(response.data);
});

module.exports = router;