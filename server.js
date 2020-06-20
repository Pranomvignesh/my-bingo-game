const express       = require('express');
const bodyParser    = require('body-parser');
const path          = require('path');
const socket        = require("socket.io");
const http          = require('http');
const uuid          = require('./class/uuid');
// const Game          = require('./class/game');
// const listOfGames   = [];
const app           = express();
const PORT          = process.env.PORT||4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',express.static(path.join(__dirname,'dist')));
app.get('/',function(request,response){
    response.send(path.join(__dirname,'dist/index.html'));
})
const server = http.createServer(app).listen(PORT);
console.log(`Server running in port:${PORT}/`);
const io = socket(server);
io.on('connection',function(socket){
    socket.emit('username',{
        username : uuid.forUser()
    })
})