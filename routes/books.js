const express = require('express')
const router = express.Router()

const {
    getBooks,
    getBook
} = require('../controllers/books.js')
const { Router } = require('express')

router.route('/').get(getBooks)
router.route('/:id').get(getBook)


module.exports = router