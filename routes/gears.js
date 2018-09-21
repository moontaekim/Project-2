var express = require('express');
var router = express.Router({
    mergeParams: true
});
const {
    Guitarist,
    Gear
} = require('../db/schema')

//new
router.get('/new', (req, res) => {
    Guitarist.findById(req.params.guitaristId)
        .then(guitarist => {
          const song = guitarist.songs.id(req.params.songId)
            res.render('gears/new' , {
                guitarist,
                song
            })
        })
})

//create
router.post('/', (req, res) => {
    const newGear = new Gear(req.body)
    Guitarist.findById(req.params.guitaristId)
    .then(guitarist => {
        const song = guitarist.songs.id(req.params.songId)
        song.gears.push(newGear)
        return guitarist.save()
    })
    .then(guitarist => {
        res.redirect(`/guitarists/${guitarist._id}/songs/${req.params.songId}`)
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