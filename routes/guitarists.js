var express = require('express');
var router = express.Router({mergeParams: true});
const { Guitarist } = require('../db/schema')

/* GET home page. */
//show all
router.get('/', (req, res) => {
  Guitarist.find()
    .then((guitarist) => {
      res.render('guitarists/index', {guitarist})
    })
})

//new guitarist
router.get('/new', (req, res) => {
  res.render('guitarists/new')
})

//edit
router.get('/:guitaristId/edit', (req, res) => {
  Guitarist.findById(req.params.guitaristId)
    .then((guitarist) => {
      res.render('guitarists/edit', {guitarist})
    })
})

//create
router.post('/', (req, res) => {
  Guitarist.create(req.body)
    .then((guitarist) => {
      res.redirect(`/guitarists/${guitarist._id}`)
    })
})

//show one guitarist show all songs
router.get('/:guitaristId', (req, res) => {
  Guitarist.findById(req.params.guitaristId)
  .then((guitarist) => {
    res.render('guitarists/show', {
      guitarist,
      songs: guitarist.songs
    })
  })
})

//update
router.put('/:guitaristId', (req, res) => {
  Guitarist.findByIdAndUpdate(req.params.guitaristId, req.body)
    .then((guitarist) => {
      res.redirect(`/guitarists/${guitarist._id}`)
    })
})

//delete
router.delete('/:guitaristId', (req ,res) => {
  Guitarist.findByIdAndRemove(req.params.guitaristId)
  .then(() => {
    res.redirect('/guitarists') 
  })
})



module.exports = router;
