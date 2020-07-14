const mongoose = require('mongoose')

const colorValidator = (v) => ('/^#([0-9a-f]{3}){1,2}$/i').test(v)

//Schema for Background. It is embedded into BookPagesSchema
const BackgroundSchema = new mongoose.Schema ({
depthIndex: {
type: Number,
required: true
},
img: String,
backgroundColor: {
type: String,
validator: [colorValidator, 'The color is invalid']
}
})

//CGRectSchema -- Containts the Size and the origin (position)
const RectSchema = new mongoose.Schema({
xPosition: {
type: Number,
required: true
},
yPosition: {
type: Number,
required: true
},
width: {
type: Number,
required: true
},
height: {
type: Number,
required: true
}
})

//Add WordSchema
const WordShema = new mongoose.Schema({
text: {
type: String,
required: true
},
rect:{
type: RectSchema,
required: true
},
depthIndex:{
type: Number,
required: true
},
audio: {
type: String,
required: true
}
})

//Add TextWrapperSchema
const TextWrapperSchema = new mongoose.Schema({
backgroundColor: {
type: String,
validator: [colorValidator, 'The color is invalid']
},
rect:{
type: RectSchema,
required: true
},
depthIndex:{
type: Number,
required: true
},
textAudio: {
type: String,
required: true
}
})

// In the app will be used in a dictionary where the key is the animation trigger and the value is an array of animation names
const AnimationSchema = new mongoose.Schema({
key: {
type: String,
required: true
},
value: {
type: [String],
required: true
}
})

//In app will be used in a dictionary where the key is a name of a pictureSet and the value is an array of picture names
const PictureSetSchema = new mongoose.Schema({
key: {
type: String,
required: true
},
value: {
type: [String],
required: true
}
})

const SoundSchema = new mongoose.Schema({
key: {
type: String,
required: true
},
value: {
type: String,
required: true
}
})

//Add CharacterSchema
const CharacterSchema = new mongoose.Schema({
nameSharedWithSiblings: {
type: String,
required: true
},
rect:{
type: RectSchema,
required: true
},
depthIndex:{
type: Number,
required: true
},
touchableRect: {
type: RectSchema,
required: true
},
animations: [AnimationSchema],
pictureSets: {
type: [PictureSetSchema],
required: true
},
sounds: [SoundSchema],
popupExplanationText: String,
popupExplanationSound: String
})

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
background: {
type: BackgroundSchema,
required:true
},
textWrappers: [TextWrapperSchema],
characters: [CharacterSchema],
words: [WordShema]
})

//TODO: Create GamePagesSchema

const BookContentsSchema = new mongoose.Schema({
bookPages: {
type: [BookPagesSchema],
required: true
}

//TODO: Add GamePages
})


module.exports = mongoose.model('BookContents', BookContentsSchema)