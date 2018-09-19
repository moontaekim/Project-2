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

const GuitarModel = mongoose.model('Guitarist', GuitaristSchema)
const SongModel = mongoose.model('Song', SongSchema)
const GearModel = mongoose.model('Gear', GearSchema)

module.exports = {
    Guitarist: GuitarModel,
    Song: SongModel,
    Gear: GearModel
}