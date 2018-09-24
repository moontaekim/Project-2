//what is this?
require('dotenv').config()

const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost/gear-tracker', { useNewUrlParser: true})
//what is going on here?
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true})

const Schema = require('./schema')

const { Guitarist, Song, Gear } = Schema
//gears Johnny Greenwood
const gearJGG1 = new Gear({
    name: "BD1",
    brand: "BOSS",
    description: "distortion pedal",
    img: "123"
})

const gearJGG2 = new Gear({
    name: "Hall of Fame",
    brand: "TC electronic",
    description: "Reverb pedal",
    img: "123"
})

//gears Jack White
const gearJWG1 = new Gear({
    name: "Bumble Buzz",
    brand: "Union Tube & Third Man Records",
    description: "Fuzz pedal",
    img: "123"
})

const gearJWG2 = new Gear({
    name: "Whammy Pitch-Shifting",
    brand: "DigiTech",
    description: "pitch shifter",
    img: "123"
})


//songs for Johnny Greenwood
const jgS1 = new Song({
    name: "Bodysnatchers",
    album: "In Rainbows",
    length: "4:02",
    img: "https://images-na.ssl-images-amazon.com/images/I/81KWYrlOt7L._SL1254_.jpg",
    gears: [gearJGG1, gearJGG2]
})

const jgS2 = new Song({
    name: "My Iron Lung",
    album: "The Bends",
    length: "4:36",
    img: "https://img.discogs.com/FoMkECc8r9AGFA3Dx2zTJp81qRw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-368116-1460271933-7901.jpeg.jpg",
    gears: [gearJGG1, gearJGG2]
})
//songs for Jack White
const jwS1 = new Song({
    name: "Sisteen Saltines",
    album: "Blunderbuss",
    length: "2:37",
    img: "https://img.discogs.com/qtkYHqSh5nfSKywKOx7a-di2_HE=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3545659-1357657373-7082.jpeg.jpg",
    gears: [gearJWG1, gearJWG2]
})

const jwS2 = new Song({
    name: "Over and Over and Over",
    album: "Boarding House Reach",
    length: "3:36",
    img: "https://images-na.ssl-images-amazon.com/images/I/817BNj8fOCL._SL1500_.jpg",
    gears: [gearJWG1, gearJWG2]
})

//guitarists
const guitaristOne = new Guitarist({
    name: "Johnny Greenwood",
    band: "Radiohead",
    bio: "Johnny Greenwood master of effects",
    img: "https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/05/JonnyGreenwoodGettyImages-173087304-1-920x584.jpg",
    songs: [jgS1, jgS2]
})

const guitaristTwo = new Guitarist({
    name: "Jack White",
    band: "The White Stripes, The Raconteurs, The Dead Weather",
    bio: "Owner of third man records",
    img: "https://thirdmanstore.com/pub/media/catalog/category/Pasted_image_at_2018_02_19_03_47_PM.png",
    songs: [jwS1, jwS2]
})



Guitarist.deleteMany()
    .then(() => {
        return Guitarist.insertMany([guitaristOne, guitaristTwo])
    })
    .then(data => {
        console.log("done seeding")
        mongoose.connection.close()
    })

