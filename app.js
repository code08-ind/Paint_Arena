const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

function onConnection(socket) {
    socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
}

io.on('connection', onConnection);

http.listen(port, () => {
    console.log('App Listening On Port ' + port)
});