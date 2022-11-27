// +-+-+-+-+-+-+-+-+-+-+-+-+
// |D|E|P|E|N|D|E|N|C|I|E|S|
// +-+-+-+-+-+-+-+-+-+-+-+-+
const express = require('express');
const app = express();

const db = require('./models')
const anime = require('./models')
const port = 3000

// +-+-+-+-+-+-+-+-+-+-+
// |M|I|D|D|L|E|W|A|R|E|
// +-+-+-+-+-+-+-+-+-+-+




// +-+-+-+-+-+-+
// |R|O|U|T|E|S|
// +-+-+-+-+-+-+


app.get('/anime', (req, res) => {
	db.anime.find({}, (err, animes) => {

       
            res.render('home.ejs', {
				drinks: drinks,
				tabTitle: 'Master Branch'
			})
        })
	})

// +-+-+-+-+-+-+-+-+
// |L|I|S|T|E|N|E|R|
// +-+-+-+-+-+-+-+-+

app.listen(port, () => {
    console.log(`App is running at localhost:${port}`)
})