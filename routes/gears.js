var express = require('express');
var router = express.Router({mergeParams: true});
const { Guitarist, Song, Gear } = require('../db/schema')

//show gear details
router.get('/:id', (req, res) => {
    Guitarist.findById(req.params.guitaristId)
    .then(guitarist => {
            const song = guitarist.songs.id(req.params.songId)
            const gear = song.gears.id(req.params.id)

            res.render('gears/show', {
                gear
            })
        })
    })

module.exports = router