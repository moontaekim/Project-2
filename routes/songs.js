var express = require('express');
var router = express.Router({
    mergeParams: true
});
const {
    Guitarist,
    Song
} = require('../db/schema')

//new
router.get('/new', (req, res) => {
    Guitarist.findById(req.params.guitaristId)
        .then(guitarist => {
            res.render('songs/new', {
                guitarist
            })
        })
})

//edit
router.get('/:songId/edit', (req, res) => {
    Guitarist.findById(req.params.guitaristId)
        .then((guitarist) => {
            const song = guitarist.songs.id(req.params.songId)
            res.render('songs/edit', {
                song
            })
        })
})

//create
router.post('/', (req, res) => {
    const newSong = new Song(req.body)
    Guitarist.findById(req.params.guitaristId)
    .then(guitarist => {
        guitarist.songs.push(newSong)
        return guitarist.save()
    })
    .then(guitarist => {
        res.redirect(`/guitarists/${guitarist._id}`)
    })
})

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

// //update
// router.put('/:songId', (req, res) => {
//     Guitarist.findById(req.params.guitaristId)
//     .then(guitarist => {
//         guitarist.songs.id(req.params.songId).set(req.body)
//         return guitarist.save
//     })
//     .then(guitarist => {
//         res.redirect(`/guitarists/${guitarist._id}`)
//     })
// })

//delete
router.delete('/:songId', (req, res) => {
    Guitarist.findById(req.params.guitaristId)
        .then(guitarist => {
            const song = req.params.songId
            guitarist.songs.remove(song)
            return guitarist.save()
                .then(() => {
                    res.redirect(`/guitarists/${guitarist._id}`)
                })
        })

})

module.exports = router;