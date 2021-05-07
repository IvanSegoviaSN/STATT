const mongoose = require('mongoose');
const { Schema } = mongoose;

const userModel = new Schema({
    tag: String,
    name: String,
    trophies: Number,
    expLevel: Number,
    expPoints: Number
});

module.exports = mongoose.model('userModel', userModel);

