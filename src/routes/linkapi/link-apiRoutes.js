const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get('/:id', async (req, res) => {
    const header = {
        'Content-Type': 'application/json'
    }
    const response = await axios(`https://api.statt.es/api/games/brawl/${req.params.id}`).catch(err => res.send('404'));

    console.log(response.data)
    await res.send(response.data);
});

module.exports = router;