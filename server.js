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

// +-+-+-+-+-+-+-+-+-+-+
// |M|I|D|D|L|E|W|A|R|E|
// +-+-+-+-+-+-+-+-+-+-+
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log('running routes');
    next();
});



// +-+-+-+-+-+-+
// |R|O|U|T|E|S 
// +-+-+-+-+-+-+

app.use('/anime', animesCtrl)
app.use('/watchList', watchListCtrl)

app.get('/', (req, res) => {
    // query animes from the database
    db.watchList.find({}, (err, watchList) => {

        if(err) {

        }
        if(!watchList.length) {
            db.watchList.instertMany(seed.watchList, (err, watchList) =>{
                if (err) {
                    console.log('Error occured in insertMany', err)
                }else {
                    console.log('Created', watchList.length, "watch list")
                    res.render('showWatchNext.ejs', {
                        watchList: watchList,
                        tabTitle: 'Anime Library'
                    })
                }
            })
        }
    })
    
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


// +-+-+-+-+-+-+-+-+
// |L|I|S|T|E|N|E|R|
// +-+-+-+-+-+-+-+-+

app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
})