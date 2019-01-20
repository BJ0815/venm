const express = require('express')

// define express obj
const app = express()

const port = process.env.PORT || 5000

// define route
app.use('/', (req,res) => {
    res.send('hello world')
})

// define listen port
app.listen(port,() => console.log(`app listening on port ${port}`))
