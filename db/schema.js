const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GuitaristSchema = new Schema({
    name: String,
    band: String,
    bio: String,
    img: String
})

const SongSchema = new Schema({
    name: String,
    album: String,
    length: Number
})

const GearSchema = new Schema({
    name: String,
    brand: String,
    description: String
})