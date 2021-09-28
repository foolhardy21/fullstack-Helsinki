const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./util/config')
const logger = require('./util/logger')
const blogsRouter = require('./routes/blogsRouter')

mongoose.connect(config.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
.then(result => {
  logger.info('connected to',config.MONGODB_URI)
})
.catch(error => {
  logger.error(error.message)
})

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', blogsRouter)

module.exports = app
