const mongoose = require('mongoose')

const BookDetailedInfoSchema = new mongoose.Schema({
title: {
type: String,
required: [true, 'Please add a title'],
trim: true,
maxlength: [100, 'Title cannot be more than 100 characters']
},
description: {
type: String,
required: [true, 'Please add a description'],
maxlength: [500, 'Title cannot be more than 500 characters']
},
authors: {
type: [String],
required: [true, 'Please add an author']
},
illustrators:{
type: [String],
required: [true, 'Please add an illustrator']
},
rating: {
type: Number,
default: 0
},
languages: {
type: [String],
required: [true, 'Please add a language']
},
level: {
type: [String],
required: [true, 'Please add a level'],
enum: ['Level 1 Infancy (Ages 1.5 - 2)', 'Level 2 Early Childhood (Ages 3 - 5)', 'Level 3 Middle Childhood (Ages 6 - 8)', 'Level 4 Late Childhood (Ages 9 - 10)']
},
learning_goals: {
type: [String],
required: [true, 'Please add a learning goal']
},
topics: {
type: [String],
required: [true, 'Please add at least one topic']
},
background_img: {
type: String,
required: [true, 'Please add a background image name']
},
preview_imgs: {
type: [String],
required: [true, 'Please add a preview img'],
validate: [arrayLimit, '{PATH} exceeds the limit of 3']
}

//TODO: Add the object id
//book_content: 
})

//function to limit the length of an array
function arrayLimit(val) {
  return val.length === 3;
}

module.exports = mongoose.model('BookDetailedInfo', BookDetailedInfoSchema)