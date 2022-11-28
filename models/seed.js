const db = require("./")

const initial_anime = [
    {
        name: 'Naruto',
        Year: 2002,
        image: 'https://imgur.com/Va5iIw5'
    },
    {
        name: 'One Piece',
        Year: 1999,
        image: 'https://imgur.com/XV2aPa2'
    },
    {
        name: 'Dragon Ball Super',
        Year: 2015,
        image: 'https://imgur.com/rLOXFRI'
    },
    {
        name: 'Attack On Titan',
        Year: 2013,
        image: 'https://imgur.com/a7rmkoS'
    },
    {
        name: 'Black Clover',
        Year: 2017,
        image: 'https://imgur.com/FLucOLr'
    },
    {
        name: 'My Hero Acedamia',
        Year: 2016,
        image: 'https://imgur.com/yaoK0Dg'
    },
    {
        name: 'Demon Slayer',
        Year: 2019,
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
                process.exit()
            }
        })
    }
})

