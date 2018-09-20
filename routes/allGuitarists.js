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

router.get('/:id', (req, res) => {
  Guitarist.findById(req.params.id)
  .then(() => {
    res.render('guitarists/show')
  })
})


module.exports = router;
