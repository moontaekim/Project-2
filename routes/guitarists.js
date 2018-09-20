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

//show one guitarist show all songs
router.get('/:guitaristId/songs', (req, res) => {
  Guitarist.findById(req.params.guitaristId)
  .then((guitarist) => {
    res.render('guitarists/show', {
      guitarist,
      songs: guitarist.songs
    })
  })
})
//delete
router.delete('/:guitaristId', (req ,res) => {
  Guitarist.findByIdAndRemove(req.params.guitaristId)
  .then(() => {
    res.redirect('/') 
  })
})

module.exports = router;
