const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('Nuevo usuario conectado');

  socket.on('chatMessage', (msg) => {
    console.log('Mensaje recibido:', msg);
    io.emit('message', msg); // Enviar a todos los clientes
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});

server.listen(3000, () => {
  console.log('Servidor backend corriendo en http://localhost:3000');
});