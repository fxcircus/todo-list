require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const itemController = require('./controllers/items')

app.use(express.json())
app.use("/items", itemController)
app.use(express.static(path.join(__dirname, 'build')))  // serve static file

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})