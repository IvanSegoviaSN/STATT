const express = require('express');
const router = express.Router();

// BrawlStars model
const brawlModel = require('../../models/games/brawlModel');
// Axios HTTP
const axios = require("axios");

/*router.get('/:tag', async (req, res) => {
    const data = await brawlModel.find({tag: req.params.tag});
    data.toString().length < 1 ? res.sendStatus(404) : res.json(data);
});
*/

let arr = []


router.get('/:tag', async (req, res) => {
    let next = true;
    const response = await axios({
        url: `https://api.brawlstars.com/v1/players/%20${req.params.tag}`,
        method: "GET",
        headers: {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQxNzJhZGE0LTQ1NTktNGNkNS04ZjQ5LWY4MGMyOGM5NzkyNCIsImlhdCI6MTYyMTU4NjQ0Miwic3ViIjoiZGV2ZWxvcGVyLzc5NmI4ODU5LWNiOGMtMGI2Yi05NDZjLWMyYzY4NzgzMjc3MiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNTIuMjEyLjE4My4xMDMiXSwidHlwZSI6ImNsaWVudCJ9XX0.PeGTMILqD10HONIoQmBo-N9e1mMj4_zVm-uQvDdf_Zdb-ADGGFVRS_TTNIpzOkP7OVNWKxWQ6smFxQZDl-QSGA"
        }
    }).catch(err => {
        next = false;
        res.send('No se han encontrado coincidencias.' + err)
    });

    next ? await findAndUpdate() : next = true;

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