const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
    console.log(`Connection ${socket.id}`)
    socket.on('message', message => {
        console.log(message)
        socket.broadcast.emit('message', message)
        //socket.join('contador')
    })
})

// let counter = 0
// setInterval(() => {
//     io.to('contador').emit('message', counter++)
// }, 1000)

http.listen(3000, function(){})
