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

const initial_watch = [
    {   title: "Dragon Ball",
       description: 4513.3
    },
    {
        title: "Bleach",
       description: 4523.3
    },
    {
        title: "Promise NeverLand",
       description: 4524.2
    },
    {
        title: "Soul Eater",
       description: 4525.6
    },
    {
        title: "Fire Force",
       description: 4040.7
    },
    {
        title: "Vinland Saga",
       description: 4040.9
    },
    {
        title: "Mob psycho",
       description: 4041.7
    },
    {
        title: "Neon Genisis",
       description: 3842.3
    },
    {
        title: "Seven Deadly Sins",
        description: efwef
    },
    {
        title: "Hunter x Hunter",
       description: 3843.4
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

db.watch.deleteMany({}, (err, watchLists) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all of watch list')

        db.watch.insertMany(seed_log, (err, watchLists) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', watchLists.length, "watch list entries")
            }
        })
    }
})