//what is this?
require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/gear-tracker', { useNewUrlParser: true})
//what is going on here?
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true})

const Schema = require('./schema')

const { Guitarist, Song, Gear } = Schema

const gearS1 = new Gear({
    name: "Distortion",
    brand: "BOSS",
    description: "distortion pedal heard in Bodysnatchers"
})

const jS1 = new Song({
    name: "Bodysnatchers",
    album: "In Rainbows",
    length: "4:02",
    gear: [gearS1]
})

const guitaristOne = new Guitarist({
    name: "Johnny Greenwood",
    band: "Radiohead",
    bio: "Johnny Greenwood master of effects",
    img: "IMG WILL GO HERE",
    song: [jS1]
})

Guitarist.deleteMany()
    .then(() => {
        return Guitarist.insertMany([guitaristOne])
    })
    .then(data => {
        console.log("done seeding")
        mongoose.connection.close()
    })

