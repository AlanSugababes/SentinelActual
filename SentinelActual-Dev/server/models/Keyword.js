const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating Schema
const KeywordSchema = new Schema({
    word: {
        type: String,
        required: true
    }
});

module.exports = Keyword = mongoose.model('keyword', KeywordSchema);