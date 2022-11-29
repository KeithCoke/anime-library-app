const db = require("../models")
const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('newAnime.ejs', {
        tabTitle: "Anime Creation"
    })
})
