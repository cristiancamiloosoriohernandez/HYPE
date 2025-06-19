const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  const { text, user } = req.body;
  let reply;

  if (text.toLowerCase().includes('ayuda')) {
    reply = '¿En qué puedo ayudarte?';
  } else {
    reply = 'Gracias por tu mensaje';
  }

  const respuesta = await new Message({ user: 'bot', text: reply }).save();
  res.json({ reply });
});

module.exports = router;