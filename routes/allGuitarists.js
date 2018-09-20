var express = require('express');
var router = express.Router();
const { Guitarist } = require('../db/schema')

/* GET home page. */
router.get('/', (req, res) => {
  Guitarist.find()
    .then((guitarist) => {
      res.render('guitarists/index', {guitarist})
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

router.delete('/:guitaristId', (res ,req) => {
  Guitarist.findByIdAndRemove(req.params.guitaristId)
  .then(() => {
    res.redirect('/') 
  })
})

module.exports = router;
