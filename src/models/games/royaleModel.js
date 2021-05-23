const mongoose = require('mongoose');
const { Schema } = mongoose;

const royaleModel = new Schema({
    tag: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 10
    },
    name: String,
    expLevel: Number,
    trophies: Number,
    bestTrophies: Number,
    wins: Number,
    losses: Number,
    battleCount: Number,
    threeCrownWins: Number,
    challengeCardsWon: Number,
    challengeMaxWins: Number,
    totalDonations: Number,
    clan: {
        type: { tag: String, name: String },
        index: false
    }

}, { timestamps: true });

module.exports = mongoose.model('Users_ClashRoyale', royaleModel);
