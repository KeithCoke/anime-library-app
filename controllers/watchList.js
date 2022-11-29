const db = require("../models")
const express = require('express')
const router = express.Router()

// New Route (GET/Read)
router.get('/new', (req, res) => {
    res.render('newWatchNext', {
        tabTitle: "Watch List"
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
    db.watch.findById(req.params.id, (err, watch) => {
        res.render("showWatchNext", {
            watch: watch,
            tabTitle: "Star Date " + watch.starDate
        })
    })
})

// Delete Route (DELETE/Delete)
router.delete('/:id', (req, res) => {
    db.watch.findByIdAndRemove(req.params.id, (err, watch) => {
        res.redirect('/')
    })
})

// Edit Route (GET/Read)
router.get('/:id/edit', (req, res) => {
    db.watch.findById(req.params.id, (err, watch) => {
        res.render("editWatchNext", {
            watch: watch,
            tabTitle: "Edit"
        })
    })
})

// Edit Route (GET/Read)
router.put('/:id', (req, res) => {
    db.watch.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, watch) => {
        res.redirect('/watch/' + watch._id)
    })
})

module.exports = router;