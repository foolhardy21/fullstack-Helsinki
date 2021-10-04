const express = require('express')
const usersRouter = express.Router()
const usersController = require('../controllers/usersController')

usersRouter.get('/', usersController.getAllUsers)
usersRouter.post('/', usersController.postUser)

module.exports = usersRouter