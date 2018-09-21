var express = require('express');
var router = express.Router({
    mergeParams: true
});
const {
    Guitarist,
    Song,
    Gear
} = require('../db/schema')

//new
router.get('/new', (req, res) => {
    Guitarist.findById(req.params.guitaristId)
        .then(guitarist => {
          const song = guitarist.songs.id(req.params.songId)
            // res.render('gears/new' , {
            //     guitarist,
            //     song
            // })
            res.send("hello")
        })
})

//show gear details
router.get('/:id', (req, res) => {
    Guitarist.findById(req.params.guitaristId)
        .then(guitarist => {
            const song = guitarist.songs.id(req.params.songId)
            const gear = song.gears.id(req.params.id)
            res.render('gears/show', {
                gear,
                song,
                guitarist
            })
        })
})

//delete
router.delete('/:id', (req, res) => {
    Guitarist.findById(req.params.guitaristId)
        .then(guitarist => {
            const song = guitarist.songs.id(req.params.songId)
            const gear = song.gears.id(req.params.id)
            gear.remove()
            return guitarist.save()
                .then(() => {
                    res.redirect(`/guitarists/${guitarist._id}/songs/${song._id}`)
                })
        })
})

module.exports = router