var express = require('express');
var router = express.Router({mergeParams: true});
const { Guitarist, Song, Gear } = require('../db/schema')


router.get('/', (req, res) => {
    Guitarist.findById(req.params.guitaristId)
    .then(guitarist => {
        const song = guitarist.songs.id(req.params.songId)
        res.render('song/index', {
            song,
            gears: song.gears
        })
    })
})

router.get('/:id', (req, res) => {
    Guitarist.findById(req.params.guitaristId)
    .then((guitarist) => {
        const song = guitarist.songs.id(req.params.songId)
        const gear = song.gears.id(req.params.id)
        res.render('song/show', {
            gear
        })
    })
})
module.exports = router;
