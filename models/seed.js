const db = require("./")

const initial_anime = [
    {
        name: 'Naruto',
        price: 132,
        image: 'https://imgur.com/Va5iIw5'
    },
    {
        name: 'One Piece',
        price: 68,
        image: 'https://imgur.com/XV2aPa2'
    },
    {
        name: 'Dragon Ball Super',
        price: 1,
        image: 'https://imgur.com/rLOXFRI'
    },
    {
        name: 'Attack On Titan',
        price: 11,
        image: 'https://imgur.com/a7rmkoS'
    },
    {
        name: 'Black Clover',
        price: 202,
        image: 'https://imgur.com/FLucOLr'
    },
    {
        name: 'My Hero Acedamia',
        price: 2,
        image: 'https://imgur.com/yaoK0Dg'
    },
    {
        name: 'Demon Slayer',
        price: 43,
        image: 'https://imgur.com/qAhA7pi'
    }
]



db.Anime.deleteMany({}, (err, Animes) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all anime')

        db.Anime.insertMany(initial_anime, (err, animes) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', animes.length, "animes")
            }
        })
    }
})

