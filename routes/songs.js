var express = require('express');
var router = express.Router({mergeParams: true});
const { Guitarist, Song, Gear } = require('../db/schema')

//show one song
router.get('/:id', (req, res) => {
    Guitarist.findById(req.params.guitaristId)
    .then(guitarist => {
        const song = guitarist.songs.id(req.params.id)
        res.render('songs/index', {
            guitarist,
            song,
            gears: song.gears
        })
    })
})
//show all gear
router.get('/:songsId/gears/:id', (req, res) => {
    Guitarist.findById(req.params.guitaristId)
    .then((guitarist) => {
        const song = guitarist.songs.id(req.params.songId)
        const gear = song.gears.id(req.params.id)
        res.render('songs/show', {
            gear
        })
    })
})
module.exports = router;
