const express = require('express');
const router = express.Router();

// RoyaleStars model
const royaleModel = require('../../models/games/royaleModel');
// Axios HTTP
const axios = require("axios");

router.get('/:tag', async (req, res) => {
    let next = true;
    const response = await axios({
        url: `https://api.clashroyale.com/v1/players/%20${req.params.tag}`,
        method: "GET",
        headers: {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImI4MmYwNTk1LWE4ZGItNDBmMy04NzQwLTA2OGJlZjE4ZTIzYiIsImlhdCI6MTYyMTY4NTM5NCwic3ViIjoiZGV2ZWxvcGVyL2QwODdiNWFmLTk4YjItMzIzOC1mMjg1LTZmOGViYWE1MWQzZiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI3OS4xNDguODMuMTU2Il0sInR5cGUiOiJjbGllbnQifV19.pWapBtMJi-GKMEwx0X2lDj36yJYlevzu2IyhqR3zhyQ48eNyR9T_VJKvjFD8qrKpqPV4XKvpfoaS7_k6sORv_w"
        }
    }).catch(err => {
        next = false;
        findWithMongo();
    });

    next ? await findAndUpdate() : next = true;

    async function findWithMongo() {
        const result = await royaleModel.findOne({tag: req.params.tag});
        if (result != null) {
            res.json(result)
        } else
            res.send('RoyaleAPI - Not Found')
    }

    async function findAndUpdate() {
        await royaleModel.findOne({tag: req.params.tag}, (err, result) => {

            if (err || result == null) {

                // New model
                const data = {tag: req.params.tag}
                new royaleModel(data).save();

                // Get new model and update result.
                findAndUpdate();
            } else {
                reloadData();
            }
        })
    }

    async function reloadData() {
        const schema = {
            name: response.data.name,
            expLevel: response.data.expLevel,
            trophies: response.data.trophies,
            bestTrophies: response.data.bestTrophies,
            wins: response.data.wins,
            losses: response.data.losses,
            battleCount: response.data.battleCount,
            threeCrownWins: response.data.threeCrownWins,
            challengeCardsWon: response.data.challengeCardsWon,
            challengeMaxWins: response.data.challengeMaxWins,
            totalDonations: response.data.totalDonations,
            clan: {
                tag: response.data.clan['tag'],
                name: response.data.clan['name']
            }
        }
        const model = await royaleModel.findOneAndUpdate({tag: req.params.tag}, schema, {new: true});
        await res.json(model);
    }

});


module.exports = router;