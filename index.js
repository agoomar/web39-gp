require('dotenv').config()
const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname)))

console.log(process.env.NODE_ENV)

// on Heroku machine, an env variable is called "NODE_ENV" -> "production"
if (process.env.NODE_ENV === 'development') { 
    const cors = require('cors')
    server.use(cors())
}

server.use('*', (req, res) => {
    res.send('<h1>success</h1>')
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log (`Listening on ${PORT}`)
})