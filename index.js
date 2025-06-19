const express = require('express');
const mongoose = require('./config/db');
const messageRoutes = require('./routes/messages');
const chatRoutes = require('./routes/chat');
const app = express();

app.use(express.json());

app.use('/api/messages', messageRoutes);
app.use('/api/chat', chatRoutes);

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});