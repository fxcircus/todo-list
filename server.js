require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const toDoController = require('./controllers/todos')

app.use(express.json())
app.use("/todos", toDoController)
app.use(express.static(path.join(__dirname, 'build')))  // serve static file

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})