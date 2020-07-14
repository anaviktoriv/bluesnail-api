const express = require('express')
const dotenv = require('dotenv')
const books = require('./routes/books')
//third party logging middleware
const morgan = require('morgan')

const connectDB = require('./config/db')

const colors = require('colors')

//load env file
dotenv.config({
    path: './config/config.env'
})
// call the connection
connectDB()

const app = express()
//body parser
app.use(express.json())

const PORT = process.env.PORT || 5000
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

const server = app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
app.use(books)