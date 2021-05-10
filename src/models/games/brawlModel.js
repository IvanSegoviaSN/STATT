const mongoose = require('mongoose');
const { Schema } = mongoose;

const brawlModel = new Schema({
    tag: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 10
    },
    name: String,
    icon: {
        type: { id: Number },
        index: false
    },
    trophies: Number,
    highestTrophies: Number,
    expLevel: Number,
    expPoints: Number,
    isQualifiedFromChampionshipChallenge: Boolean,
    '3vs3Victories': Number,
    soloVictories: Number,
    duoVictories: Number,
    club: {
        type: { tag: String, name: String },
        index: false
    }

}, { timestamps: true });

module.exports = mongoose.model('Users_BrawlStars', brawlModel);
