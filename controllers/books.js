	const BookBasicInfo = require('../models/BookBasicInfo')



	//@desc Get all books
	//@route GET /api/v1/books
	//@access Public
	exports.getBooks = (req, res, next) => {
	    res.status(200).json({
	        success: true,
	        msg: 'Show all books'
	    })
	}

	//@desc Get single book
	//@route GET /api/v1/books/:id
	//@access Public
	exports.getBook = (req, res, next) => {
	    res.status(200).json({
	        success: true,
	        msg: 'Get a single book'
	    })
	}

	//@desc Post a book
	//@route POST /api/v1/books
	//@access Private

//TODO: POST METHOD DOESN'T WORK FIX IT (CHECK ROUTER WHERE WE ARE MOUNTING ROUTES)
exports.createBook = (req, res, next) => {
	    res.status(200).json({
	        success: true,
	        msg: 'Post a single book'
	    })
	}
// 	exports.createBook = async (req, res, next) => {
// console.log(req.body)
// 	    try {
// 	        // const bookBasicInfo = await BookBasicInfo.create(req.body);
// 	        res.status(201).json({
// 	            success: true,
// 	            // data: bookBasicInfo
// 	        })
// 	    } catch {
// 	        res.status(400).json({
// 	            success: false
// 	        })
// 	    }
// 	}