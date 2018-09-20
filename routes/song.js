var express = require('express');
var router = express.Router();
const { Guitarist, Song, Gear } = require('../db/schema')


router.get('/', (req, res) => {
    Song.find()
        .then((song) => {
            res.render('song/index', {song})
        })
})

module.exports = router;
