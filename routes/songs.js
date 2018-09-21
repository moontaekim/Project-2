var express = require('express');
var router = express.Router({mergeParams: true});
const { Guitarist, Song, Gear } = require('../db/schema')

//show one song and show all gear
router.get('/:songId', (req, res) => {
    Guitarist.findById(req.params.guitaristId)
    .then(guitarist => {
        const song = guitarist.songs.id(req.params.songId)
        res.render('songs/index', {
            guitarist,
            song,
            gears: song.gears
        })
    })
})

module.exports = router;
