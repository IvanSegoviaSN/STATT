const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get('/:id', async (req, res) => {
    const header = {
        'Content-Type': 'application/json'
    }
    // https://api.statt.es/api/games/brawl/${req.params.id}`
    const response = await axios(`http://localhost:3001/api/games/brawl/${req.params.id}` || `https://api.statt.es/api/games/brawl/${req.params.id}`)
        .catch(err => res.send('404'));

    console.log(response.data)
    await res.send(response.data);
});

module.exports = router;