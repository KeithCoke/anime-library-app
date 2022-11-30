const db = require("./")

 const initial_anime = [
    {
        name: 'Naruto',
        year: 2002,
        image: './public/images/newnaruto.png'
    },
    {
        name: 'One Piece',
        year: 1999,
        image: 'https://imgur.com/XV2aPa2'
    },
    {
        name: 'Dragon Ball Super',
        year: 2015,
        image: 'https://imgur.com/rLOXFRI'
    },
    {
        name: 'Attack On Titan',
        year: 2013,
        image: 'https://imgur.com/a7rmkoS'
    },
    {
        name: 'Black Clover',
        year: 2017,
        image: 'https://imgur.com/FLucOLr'
    },
    {
        name: 'My Hero Acedamia',
        year: 2016,
        image: 'https://imgur.com/yaoK0Dg'
    },
    {
        name: 'Demon Slayer',
        year: 2019,
        image: 'https://imgur.com/qAhA7pi'
    }
]

const initial_watch = [
    {   title: "Dragon Ball",
       description: "hdsiiusd"
    },
    {
        title: "Bleach",
       description: "ddchjdsb"
    },
    {
        title: "Promise NeverLand",
       description: "djjddjj"
    },
    {
        title: "Soul Eater",
       description: "djdjdj"
    },
    {
        title: "Fire Force",
       description: "dncduedcd"
    },
    {
        title: "Vinland Saga",
       description: "dfnciucd"
    },
    {
        title: "Mob psycho",
       description: "dskudshcd"
    },
    {
        title: "Neon Genisis",
       description: "dnicniencid"
    },
    {
        title: "Seven Deadly Sins",
        description: "dncidnicn"
    },
    {
        title: "Hunter x Hunter",
       description: "cmdkcndn"
    },
]


db.anime.deleteMany({}, (err, animes) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all animes')

        db.anime.insertMany(initial_anime, (err, animes) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', animes.length, "animes")
            }
        })
    }
})

db.watchList.deleteMany({}, (err, watchLists) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all of watch list')

        db.watchList.insertMany(initial_watch, (err, watchLists) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', watchLists.length, "watch list entries")
            }
        })
    }
})

module.exports.seed = initial_anime