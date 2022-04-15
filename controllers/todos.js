const express = require('express')
const router = express.Router()
const ToDo = require ('../models/ToDo')

/*
URL         HTTP        Verb    Action -Used-For         Mongoose-Model-Function
/todos/     GET	        index	Displaying a list	    .find
/todos/     POST	    create	Create a new todo	    .create
/todos/:id	GET	        show	Display a specific todo	.findById
/todos/:id	PATCH/PUT	update	Update a specific todo	.findByIdAndUpdate
/todos/:id	DELETE	    destroy	Delete a specific todo	.findByIdAndDelete
*/


// Index: get all Items
router.get('/', (req, res) => {
    ToDo.find({}, (err, foundToDos) => {
        if(!err) {
            res.status(200).json(foundToDos)
        } else {
            res.status(400).json(err)
        }
    })
})

// Create
router.post('/', (req, res) => {
    const { body } = req

    ToDo.create(body, (err, createdToDo) => {
        if(!err) {
            res.status(200).json({ message: "Created!", createdToDo})
        } else {
            res.status(400).json(err)
        }
    })
})

// Show
router.get('/:id', (req, res) => {
    ToDo.findById(req.params.id, (err, foundToDo) => {
        if(!err) {
            res.status(200).json(foundToDo)
        } else {
            res.status(400).json(err)
        }
    })
})

// Update
router.put('/:id', (req, res) => {
    const { body } = req

    ToDo.findByIdAndUpdate(req.params.id, body, {new: true}, (err, updatedToDo) => {
        if(!err) {
            res.status(200).json(updatedToDo)
        } else {
            res.status(400).json(err)
        }
    })
})

// Destroy
router.delete('/:id', (req, res) => {
    ToDo.findByIdAndDelete(req.params.id, (err, deletedToDo) => {
        if(!err) {
            res.status(200).json(deletedToDo)
        } else {
            res.status(400).json(err)
        }
    })
})

// Table
router.get('/table', (req, res) => {
    ToDo.find({}, (err, foundToDos) => {
        if(!err) {
            const formattedData = foundToDos.reduce((acc, item) => {
                acc[item.status] = acc[item.status] ? [...acc[item.status], item] : [item]
                return acc
            }, {})
            res.status(200).json(formattedData)
        } else {
            res.status(400).json(err)
        }
    })
})

module.exports = router