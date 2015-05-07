var express = require('express');
var app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
    fs = require('fs');

app.use('/css', express.static(__dirname + '/css'));
app.use('/font-awesome', express.static(__dirname + '/font-awesome'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/less', express.static(__dirname + '/less'));
app.use('/sound', express.static(__dirname + '/sound'));
app.use('/tetris.html', express.static(__dirname + '/tetris.html'));
app.use('/puzzle.html', express.static(__dirname + '/puzzle.html'));
app.use('/2048.html', express.static(__dirname + '/2048.html'));

app.get('/', function (req,res) {
	res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket, pseudo) {
    // Dès qu'on nous donne un pseudo, on le stocke en variable de session et on informe les autres personnes
    socket.on('nouveau_client', function(pseudo, color) {
        console.log('Nouveau client : ' + pseudo);
        pseudo = ent.encode(pseudo);
        socket.pseudo = pseudo;
        socket.color = color
        socket.broadcast.emit('nouveau_client', pseudo);
    });

    // Dès qu'on reçoit un message, on récupère le pseudo de son auteur et on le transmet aux autres personnes
    socket.on('message', function (message) {
        message = ent.encode(message);
        socket.broadcast.emit('message', {pseudo: socket.pseudo, color: socket.color, message: message});
    }); 
});

server.listen(1337, '127.0.0.1');

console.log('Server listening at http://127.0.0.1:1337/');

