const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
})
app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/client/script.js')
})
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/client/style.css')
})

io.on('connection', (socket) => {
})

server.listen(3000, () => {
    console.log('listening on *:3000')
})