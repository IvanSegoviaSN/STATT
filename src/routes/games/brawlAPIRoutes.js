const express = require('express');
const router = express.Router();

// BrawlStars model
const brawlModel = require('../../models/games/brawlModel');

// Axios HTTP
const axios = require("axios");

router.get('/:tag', async (req, res) => {
    let next = true;
    const response = await axios({
        url: `https://api.brawlstars.com/v1/players/%20${req.params.tag}`,
        method: "GET",
        headers: {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjM1Mjc4ZGQ3LTIyM2ItNDYxMy05YWQxLTQzN2ZhYzAwYmMzMiIsImlhdCI6MTYyMzM3NjEwNCwic3ViIjoiZGV2ZWxvcGVyLzc5NmI4ODU5LWNiOGMtMGI2Yi05NDZjLWMyYzY4NzgzMjc3MiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTguMjAzLjIwNy4xOTMiXSwidHlwZSI6ImNsaWVudCJ9XX0.XYdP-hNd_Si6-Vfrw1ZydnLbjneQXf17AywIbtD4bK_yy0RdsBgBadzkis-TJo9HyiJY9ngLbfT2Ryx08HaCtg"
        }
    }).catch(err => {
        next = false;
        findWithMongo();
    });

    next ? await findAndUpdate() : next = true;

    async function findWithMongo() {
        const result = await brawlModel.findOne({tag: req.params.tag});
        if (result != null) {
            res.json(result)
        } else
            res.send('BrawlAPI - Not Found')
    }

    async function findAndUpdate() {
        await brawlModel.findOne({tag: req.params.tag}, (err, result) => {

            if (err || result == null) {

                // New model
                const data = {tag: req.params.tag}
                new brawlModel(data).save();

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
            icon: {
                id: response.data.icon['id']
            },
            trophies: response.data.trophies,
            highestTrophies: response.data.highestTrophies,
            expLevel: response.data.expLevel,
            expPoints: response.data.expPoints,
            isQualifiedFromChampionshipChallenge: response.data.isQualifiedFromChampionshipChallenge,
            '3vs3Victories': response.data['3vs3Victories'],
            soloVictories: response.data.soloVictories,
            duoVictories: response.data.duoVictories,
            club: {
                tag: response.data.club['tag'],
                name: response.data.club['name']
            }
        }
        const model = await brawlModel.findOneAndUpdate({tag: req.params.tag}, schema, {new: true});
        await res.json(model);
    }

});


module.exports = router;