const mongoose = require('mongoose')

const BookBasicInfoSchema = new mongoose.Schema({
thumbnail_name: {
type: String,
required: [true, 'Please add a thumbnail name'],
trim: true,
maxlength: [50, 'Name cannot be more than 50 characters']
},
price: {
type: Number,
default: 0
},
//TODO: Add the object id
book_detailed_info: {
type: mongoose.Schema.ObjectId,
ref: 'BookDetailedInfo',
required: true
}
})

module.exports = mongoose.model('BookBasicInfo', BookBasicInfoSchema)