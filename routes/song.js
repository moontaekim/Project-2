var express = require('express');
var router = express.Router({mergeParams: true});
const { Guitarist, Song, Gear } = require('../db/schema')


router.get('/', (req, res) => {
    Guitarist.findById(req.params.guitaristId)
    .then(guitarist => {
        const song = guitarist.songs.id(req.params.id)
        res.render('song/index', {song})
    })
})

module.exports = router;
