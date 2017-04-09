var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg)
        //io.broadcast('chat message', msg)
        //console.log('Message: ' + msg)
    })
     //socket.broadcast.emit('broadcast', 'hello friends!');
    io.on('connection', function (socket) {
        //socket.broadcast.emit('user connected');
        io.emit('user connected');
    });
    socket.on('disconnect', function(){
        console.log("User has DISCONNECTED")
    })
})

http.listen(3000, function(){
    console.log("Listening on port 3000.")
})