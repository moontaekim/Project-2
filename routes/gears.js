var express = require('express');
var router = express.Router();
const { Gear } = require('../db/schema')

router.get('/', (req,res) => {
    Gear.find()
    .then(() => {
        res.send('hello')
    })
})

module.exports = router;
