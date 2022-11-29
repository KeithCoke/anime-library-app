// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
const express = require('express');
const app = express();
const methodOverride = require('method-override');
require("dotenv").config();

const port = process.env.PORT

const db = require('./models')
// const anime = require('./models/anime')

// +-+-+-+-+-+-+-+-+-+-+
// |M|I|D|D|L|E|W|A|R|E|
// +-+-+-+-+-+-+-+-+-+-+
app.use(express.static('public'))



// +-+-+-+-+-+-+
// |R|O|U|T|E|S|
// +-+-+-+-+-+-+

app.get('/', (req, res)=> {
    res.render('index.ejs',)
})
//  app.get('/anime', (req, res) => {
// 	db.anime.find({}, (err, animes) => {

       
//             res.render('home.ejs', {
// 				animes: animes,
// 				tabTitle: 'Master Branch'
// 			})
//         })
// 	})

// +-+-+-+-+-+-+-+-+
// |L|I|S|T|E|N|E|R|
// +-+-+-+-+-+-+-+-+

app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
})