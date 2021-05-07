const mongoose = require('mongoose');
const { Schema } = mongoose;

const mainModel = new Schema({
    username: String,
    kills: String
});

module.exports = mongoose.model('mainModel', mainModel);



