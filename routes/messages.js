const express = require('express');
const router = express.Router();
const controller = require('../controllers/messagesController');

router.post('/', controller.createMessage);
router.get('/', controller.getMessages);
router.put('/:id', controller.updateMessage);
router.delete('/:id', controller.deleteMessage);

module.exports = router;