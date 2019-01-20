const express = require('express')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const hero = require('./router/hero')

var db = mongoose.connect('mongodb://localhost:27017');
// define express obj
const app = express()

const port = process.env.PORT || 5000

// define route
// app.use('/', (req,res) => {
//     res.send('hello world')
// })
app.use(bodyParser.json())
app.use('/api',hero)

// define listen port
app.listen(port,() => console.log(`app listening on port ${port}`))
