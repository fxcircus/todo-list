const express = require('express')
const router = express.Router()
const Item = require ('../models/Item')

// Index: get all Items
router.get('/', (req, res) => {
    Item.find({}, (err, foundItems) => {
        if(!err) {
            res.status(200).json(foundItems)
        } else {
            res.status(400).json(err)
        }
    })
})

// Create
router.post('/', (req, res) => {
    const { body } = req

    Item.create(body, (err, createdItem) => {
        if(!err) {
            res.status(200).json({ message: "creted!", createdItem})
        } else {
            res.status(400).json(err)
        }
    })
})

module.exports = router