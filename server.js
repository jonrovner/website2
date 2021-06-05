require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log(req)
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(process.env.PORT || 3001)