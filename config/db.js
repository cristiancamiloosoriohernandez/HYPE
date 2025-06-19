const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hype')
  .then(() => console.log('✅ MongoDB conectado'))
  .catch((err) => console.error('❌ Error al conectar a MongoDB:', err));

module.exports = mongoose;