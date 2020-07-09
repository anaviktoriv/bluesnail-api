const mongoose = require('mongoose')

//Schema for Background. It is embedded into BookPagesSchema
const BackgroundSchema = new mongoose.Schema ({
depthIndex: {
type: Number,
required: true
},
img: String,
backgroundColor: {
type: String,
//TODO: Add a validator for a hexadecimal color value
}
})


//TODO: Add WordSchema

//TODO: Add TextWrapperSchema

//TODO: Add CharacterSchema

const BookPagesSchema = new mongoose.Schema({
number: {
type: Number,
required: true
},
readingMode: {
type: String,
required: true,
enum: ['Listen', 'ReadWithHelp', 'ReadItMyself']
},

})

const BookContentsSchema = new mongoose.Schema({
bookPages:
})


module.exports = mongoose.model('BookContents', BookContentsSchema)