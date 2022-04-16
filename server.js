require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000
const toDoController = require('./controllers/todos')

app.use(cors())
app.use(express.json()) // prepares express to parse json
app.use(express.static(path.join(__dirname, 'build')))  // serve static file
app.use("/api/todos", toDoController)

app.get('.*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})