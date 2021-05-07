const express = require('express');
const router = express.Router();

const userModel = require('../models/userModel');
const axios = require("axios");

router.put('/:tag', async (req, res) => {
    const response = await axios({
        url: `https://api.brawlstars.com/v1/players/%20${req.params.tag}`,
        method: "GET",
        headers: {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjMyZGZhZGE4LTk5YjUtNDE2Yi1hYWM3LWM4NjZmOTYzMzg1NyIsImlhdCI6MTYyMDI0ODA3Miwic3ViIjoiZGV2ZWxvcGVyLzc5NmI4ODU5LWNiOGMtMGI2Yi05NDZjLWMyYzY4NzgzMjc3MiIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNzkuMTQ2LjE3OC41OCIsIjIwNi4xODkuMjA1LjI1MSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.a5O8T3JMP7hlbUqzFQmGYrr89Li0fLbQvnfmQjzyMkAqzZ7ArkycsN4JRqpxapsbHXIgS5VKsTHDuMRb4SAp-g"
        }
    })

    await findAndUpdate();

    async function findAndUpdate() {
        await userModel.findOne({tag: req.params.tag}, (err, result) => {
            if (err || result == null) {
                createData();
            } else {
                reloadData();
                res.json(result);
            }
        })
    }

    async function reloadData() {
        const data = {
            name: response.data.name,
            trophies: response.data.trophies,
            expLevel: response.data.expLevel,
            expPoints: response.data.expPoints,
        }
        await userModel.findOneAndUpdate({tag: req.params.tag}, data);
    }

    async function createData() {
        const data = {
            tag: req.params.tag,
            name: response.data.name,
            trophies: response.data.trophies,
            expLevel: response.data.expLevel,
            expPoints: response.data.expPoints,
        }
        await new userModel(data).save();
        await findAndUpdate();
    }

});


module.exports = router;