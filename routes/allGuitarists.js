var express = require('express');
var router = express.Router();
const { Guitarist } = require('../db/schema')

/* GET home page. */
router.get('/', (req, res) => {
  Guitarist.find()
    .then((guitarists) => {
      res.render('guitarists/index', {guitarists})
    })
})

router.get('/:guitaristId', (req, res) => {
  Guitarist.findById(req.params.guitaristId)
  .then((guitarist) => {
    res.render('guitarists/show', {
      guitarist,
      song: guitarist.songs
    })
  })
})

module.exports = router;
