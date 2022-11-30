const db = require("./")

 const initial_anime = [
    {
        name: 'Naruto',
        year: 2002,
        image: 'https://resizing.flixster.com/yCXTNU8oxpZQ-7KZykkhFQbmSqQ=/206x305/v2/https://flxt.tmsimg.com/assets/p11944305_b_v13_aa.jpg'    
    },
    {
        name: 'One Piece',
        year: 1999,
        image: 'https://cdn.animenewsnetwork.com/thumbnails/max700x700/cms/news/102888/one-piece-zou-visual.jpeg'
    },
    {
        name: 'Dragon Ball Super',
        year: 2015,
        image: 'https://upload.wikimedia.org/wikipedia/en/7/74/Dragon_Ball_Super_Key_visual.jpg'
    },
    {
        name: 'Attack On Titan',
        year: 2013,
        image: 'https://static.wikia.nocookie.net/shingekinokyojin/images/d/d8/Attack_on_Titan_Season_1.jpg'
    },
    {
        name: 'Black Clover',
        year: 2017,
        image: 'https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2021/01/ed188acdc3ce09eb10d7344da87b3a43.jpg'
    },
    {
        name: 'My Hero Acedamia',
        year: 2016,
        image: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/9/95/Season_6_Poster_3.png'
    },
    {
        name: 'Demon Slayer',
        year: 2019,
        image: 'https://www.coyotemag.fr/wp-content/uploads/2022/02/Demon-Slayer-Hinokami-Chronicles.jpg'
    },
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
module.exports.watchList = initial_watch