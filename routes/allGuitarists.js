var express = require('express');
var router = express.Router();
const { Guitarist, Song } = require('../db/schema')

/* GET home page. */
router.get('/', (req, res) => {
  Guitarist.find()
    .then((guitarists) => {
      res.render('guitarists/index', {guitarists})
    })
})

router.get('/:guitaristId', (req, res) => {
  Guitarist.findById(req.params.guitaristId)
  .then((guitarists) => {
    res.render('guitarists/show', {
      guitarists,
      songs: guitarists.song
    })
  })
})

module.exports = router;
