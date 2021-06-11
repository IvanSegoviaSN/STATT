const express = require('express');
const router = express.Router();

// ClashStars model
const clashModel = require('../../models/games/clashModel');
// Axios HTTP
const axios = require("axios");

router.get('/:tag', async (req, res) => {
    let next = true;
    const response = await axios({
        url: `https://api.clashofclans.com/v1/players/%20${req.params.tag}`,
        method: "GET",
        headers: {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjAzNGM5YjBlLWRjZDgtNDllYy04YzZjLTQzNjEzYzUzZTYyYyIsImlhdCI6MTYyMTY4NjIyOSwic3ViIjoiZGV2ZWxvcGVyL2ZkOWU5MzkxLTRjYjktMWY3My0yZjkyLTJlNjI4ZTk1MTQ3OSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjc5LjE0OC44My4xNTYiXSwidHlwZSI6ImNsaWVudCJ9XX0.s7LhSKJe6BCCsO7Zeu7rzsZMiP2m2Z3aLZjpYqhwHj0T-VNTqXiRCJrFeWqCLz3SKAutqvB0Dea6HuNNriYE5g"
        }
    }).catch(err => {
        next = false;
        findWithMongo();
    });

    next ? await findAndUpdate() : next = true;

    async function findWithMongo() {
        const result = await clashModel.findOne({tag: req.params.tag});
        if (result != null) {
            res.json(result)
        } else
            res.send('ClashAPI - Not Found')
    }

    async function findAndUpdate() {
        await clashModel.findOne({tag: req.params.tag}, (err, result) => {

            if (err || result == null) {

                // New model
                const data = {tag: req.params.tag}
                new clashModel(data).save();

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
            townHallLevel: response.data.townHallLevel,
            expLevel: response.data.expLevel,
            trophies: response.data.trophies,
            bestTrophies: response.data.bestTrophies,
            warStars: response.data.warStars,
            attackWins: response.data.attackWins,
            defenseWins: response.data.defenseWins,
            builderHallLevel: response.data.builderHallLevel,
            versusTrophies: response.data.versusTrophies,
            bestVersusTrophies: response.data.bestVersusTrophies,
            versusBattleWins: response.data.versusBattleWins,
            clan: {
                tag: response.data.clan['tag'],
                name: response.data.clan['name']
            }
        }
        const model = await clashModel.findOneAndUpdate({tag: req.params.tag}, schema, {new: true});
        await res.json(model);
    }

});


module.exports = router;