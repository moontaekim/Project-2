var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:guitaristId', (req, res) => {
  res.send('hey')
})

module.exports = router;
