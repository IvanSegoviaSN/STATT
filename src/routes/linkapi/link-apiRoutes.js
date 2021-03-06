const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get('/:game/:id', async (req, res) => {

    let response;

    switch (req.params.game) {
        case "brawl":
            response = await axios(`https://api.statt.es/api/games/brawl/${req.params.id}`).catch(err => res.send('Routes - B: ' + err));
            break
        case "royale":
            response = await axios(`https://api.statt.es/api/games/royale/${req.params.id}`).catch(err => res.send('Routes - R: ' + err));
            break
        case "clash":
            response = await axios(`https://api.statt.es/api/games/clash/${req.params.id}`).catch(err => res.send('Routes - C: ' + err));
            break
    }

    await res.send(response.data);
});

module.exports = router;