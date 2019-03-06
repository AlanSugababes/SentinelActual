const express = require('express');
const router = express.Router();

//Item Model
const Keyword = require('../../models/Keyword');

//Get for api/keywords
//Get all keywords
router.get('/', (req, res) => {
    Keyword.find()
    .then(keyword => res.json(keyword));
});


//Post for api/keywords
//Create a post
router.post('/', (req, res) => {
    const newKeyword = new Keyword({
        word: req.body.word
    });
    newKeyword.save().then(keyword => res.json(keyword));
});


module.exports = router;