const express = require('express')
const router = express.Router()

const {
    getBooks,
    getBook,
    createBook
} = require('../controllers/books.js')
const { Router } = require('express')

router.route('/').get(getBooks).post(createBook)
router.route('/:id').get(getBook)



module.exports = router