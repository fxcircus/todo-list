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
            res.status(200).json({ message: "Created!", createdItem})
        } else {
            res.status(400).json(err)
        }
    })
})


// Update
router.put('/:id', (req, res) => {
    const { body } = req

    Item.findByIdAndUpdate(req.params.id, body, {new: true}, (err, updatedItem) => {
        if(!err) {
            res.status(200).json(updatedItem)
        } else {
            res.status(400).json(err)
        }
    })
})

// Table
router.get('/table', (req, res) => {
    Item.find({}, (err, foundItems) => {
        if(!err) {
            const formattedData = foundItems.reduce((acc, item) => {
                acc[item.status] = acc[item.status] ? [...acc[item.status], item] : [item]
                return acc
            }, {})
            res.status(200).json(formattedData)
        } else {
            res.status(400).json(err)
        }
    })
})

// Show
router.get('/:id', (req, res) => {
    Item.findById(req.params.id, (err, foundItem) => {
        if(!err) {
            res.status(200).json(foundItem)
        } else {
            res.status(400).json(err)
        }
    })
})

module.exports = router