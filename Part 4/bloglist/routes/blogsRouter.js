const express = require('express')
const blogsRouter = express.Router()
const blogsController = require('../controllers/blogsController')

blogsRouter.get('/api/blogs', blogsController.getAllBlogs)
blogsRouter.post('/api/blogs', blogsController.postBlog)
blogsRouter.delete('/api/blogs/:id', blogsController.deleteBlog)
blogsRouter.put('/api/blogs/:id', blogsController.updateBlog)

blogsRouter.post('/api/users', blogsController.postUser)

module.exports = blogsRouter