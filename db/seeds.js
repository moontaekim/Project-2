//what is this?
require('dotenv').config()

const mongoose = require('mongoose')
//what is going on here?
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true})

const Schema = require('./schema')

const { Guitarist, Song, Gear } = Schema