const express = require('express');
const router = express.Router();
const bookController = require('./controllers/booksController')

router.get('/books', bookController.listBooks)
router.post('/books', bookController.createNewBook)
router.delete('/books/:id', bookController.deleteBook)
router.put('/books/:id', bookController.updateBook)

module.exports = router;
