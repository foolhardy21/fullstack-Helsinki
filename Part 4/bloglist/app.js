const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./util/config')
const logger = require('./util/logger')
const blogsRouter = require('./routes/blogsRouter')
const usersRouter = require('./routes/usersRouter')
const loginRouter = require('./routes/loginRouter')
const resetRouter = require('./routes/resetRouter')
const middleware = require('./util/middleware')

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
app.use(middleware.tokenExtractor)
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
if(process.env.NODE_ENV === 'test') {
  app.use('/api/testing/reset', resetRouter)
}

module.exports = app
