
const express = require('express');
const router = express.Router();
const axios = require('axios');

const mainModel = require('../models/mainModel');
const userModel = require('../models/userModel');

router.get('/', async (req, res) => {
    const data = await mainModel.find();
    res.json(data);
});

router.post('/', async (req, res) => {
    const model = new mainModel(req.body);
    await model.save();
    console.log(model);

    res.json({
        status: "OK"
    });

});

router.get('/player', async (req, res) => {
    const data = await userModel.find();
    res.json(data);
});

router.get('/player/:tag', async (req, res) => {
    axios.put('http://localhost:3000/api/brawlAPI/' + req.params.tag || 'https://www.statt.es/api/brawlAPI/' + req.params.tag)
        .then((response) => {
            res.json(response.data);
        }).catch((err) => {
        console.error(err);
    });
});

module.exports = router;