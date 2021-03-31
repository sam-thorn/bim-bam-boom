const express = require('express')

const server = express()
module.exports = server

server.set('view engine')
server.use(express.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))

// ---------------------------

server.get('/', (req, res) => {
  res.sendFile('views/index.html', {root: __dirname})
})