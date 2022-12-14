const db = require("../models")
const express = require('express')
const { watch } = require("../models/anime")
const { watchList } = require("../models/seed")
const router = express.Router()

// New Route (GET/Read)
router.get('/new', (req, res) => {
    db.watchList.find({}, (err, watchList) =>{
        if(err) {

        } else {
            res.render('showWatchNext.ejs', {
                tabTitle: "Watch List",
                watchList: watchList
            })
        }
    })
})



// Create Route (POST/Create)
router.post('/', (req, res) => {
    db.watch.create(req.body, (err, watch) => {
        res.redirect('/watch/' + watch._id)
    })
})

// Show Route (GET/Read)
router.get('/:id', (req, res) => {
    db.watchList.findById(req.params.id, (err, watch) => {
        res.render("showWatchNext", {
            watch: watch,
            tabTitle: " Watch Next" + watchList.title
        })
    })
})

// Delete Route (DELETE/Delete)
router.delete('/:id', (req, res) => {
    db.watchList.findByIdAndRemove(req.params.id, (err, watch) => {
        res.redirect('/watchList/new')
    })
})

// Edit Route (GET/Read)
router.get('/:id/edit', (req, res) => {
    db.watch.findById(req.params.id, (err, watch) => {
        res.render("editWatchList", {
            watch: watch,
            tabTitle: "Edit"
        })
    })
})

// Update Route (PUT/Update)
router.put('/:id', (req, res) => {
    db.watch.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, watch) => {
        res.redirect('/watch/' + watch._id)
    })
})

module.exports = router;