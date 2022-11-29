// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
const express = require('express');
const app = express();
const methodOverride = require('method-override');
require("dotenv").config();

const port = process.env.PORT

const db = require('./models')

const animesCtrl = require('./controllers/animes')
const watchListCtrl = require('./controllers/watchLists')

const seed = require('./models/seed.js')
// const anime = require('./models')

// +-+-+-+-+-+-+-+-+-+-+
// |M|I|D|D|L|E|W|A|R|E|
// +-+-+-+-+-+-+-+-+-+-+
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});





// +-+-+-+-+-+-+
// |R|O|U|T|E|S 
// +-+-+-+-+-+-+

// app.get('/', (req, res)=> {
    
//     res.render('index.ejs',)
// })

app.get('/', (req, res) => {
    // query animes from the database
    db.anime.find({}, (err, animes) => {
        if(err) {
            // return error message to page
        }
        if(!animes.length) {
            db.anime.insertMany(seed.seed, (err, animes) => {
                if (err) {
                    console.log('Error occured in insertMany', err)
                } else {
                    console.log('Created', animes.length, "animes")
                    res.render('index.ejs', {
                        animes: animes,
                        tabTitle: 'Anime Library'
                    })
                }
            })
        } else {
            console.log(animes.length, ' animes')
            res.render('index.ejs', {
                animes: animes,
                tabTitle: 'Anime Library'
            })
        }
    })
 })

    app.use('/anime', animesCtrl)
    app.use('/watch', watchListCtrl)

// +-+-+-+-+-+-+-+-+
// |L|I|S|T|E|N|E|R|
// +-+-+-+-+-+-+-+-+

app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
})