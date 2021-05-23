const mongoose = require('mongoose');
const { Schema } = mongoose;

const clashModel = new Schema({
    tag: {
        type: String,
        required: true,
        unique: true,
        min: 5,
        max: 10
    },
    name: String,
    townHallLevel: Number,
    expLevel: Number,
    trophies: Number,
    bestTrophies: Number,
    warStars: Number,
    attackWins: Number,
    defenseWins: Number,
    builderHallLevel: Number,
    versusTrophies: Number,
    bestVersusTrophies: Number,
    versusBattleWins: Number,
    clan: {
        type: { tag: String, name: String },
        index: false
    }

}, { timestamps: true });

module.exports = mongoose.model('Users_ClashOfClans', clashModel);
