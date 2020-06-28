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