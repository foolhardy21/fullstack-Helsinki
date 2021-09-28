const express = require('express')
const blogsRouter = express.Router()
const blogsController = require('../controllers/blogsController')

blogsRouter.get('/api/blogs', blogsController.getAllBlogs)

blogsRouter.post('/api/blogs', blogsController.postBlog)

module.exports = blogsRouter