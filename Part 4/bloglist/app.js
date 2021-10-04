const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./util/config')
const logger = require('./util/logger')
const blogsRouter = require('./routes/blogsRouter')
const usersRouter = require('./routes/usersRouter')
const loginRouter = require('./routes/loginRouter')

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
app.use('/api/blogs', blogsRouter)
app.use('/api/users', blogsRouter)
app.use('/api/login', loginRouter)

module.exports = app
