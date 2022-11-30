const db = require("../models")
const express = require('express')
const router = express.Router()

// GET/Read
router.get('/new', (req, res) => {
    res.render('newAnime.ejs', {
        tabTitle: "Anime Creation"
    })
})

// POST/Create
router.post('/', (req, res) => {
    if (req.body.visited) {
        req.body.visited = true
    } else {
        req.body.visited = false
    }
    db.anime.create(req.body, (err, anime) => {
        res.redirect('/anime/' + anime._id)
    })
})

// GET/Read
router.get('/:id', (req, res) => {
    db.anime.findById(req.params.id, (err, anime) => {
        res.render("showAnime", {
            anime: anime,
            tabTitle: "Anime: " + anime.name
        })
    })
})

router.delete('/:id', (req, res) => {

    db.anime.findByIdAndRemove(req.params.id, (err, anime) => {
        res.redirect('/')
    })
})

    router.get('/:id/edit', (req, res) => {
        db.anime.findById(req.params.id, (err, anime) => {
            res.render("editAnime", {
                anime: anime,
                tabTitle: "Edit"
            })
        })
    })

    router.put('/:id', (req, res) => {
        db.anime.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, anime) => {
            res.redirect('/anime/' + anime._id)
        })
    })

    module.exports = router