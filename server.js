const express = require('express');
const http = require('http');
const socketIo = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection',(socket)=>{
    console.log("new client connected");

    socket.on('control',(data)=>{
        console.log('Control signal recieved',data);
        io.emit('control',data);
    });

    socket.on('disconnect',()=>{
        console.log('client disconnected');
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT,()=>console.log(`server running on port ${PORT}`))
