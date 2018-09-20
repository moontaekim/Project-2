var express = require('express');
var router = express.Router();
const { Guitarist } = require('../db/schema')

/* GET home page. */
router.get('/', (req, res) => {
  Guitarist.find()
    .then((guitarists) => {
      res.render('allGuitarists', {guitarists})
    })
})

module.exports = router;
