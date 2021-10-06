const express = require('express')
const blogsRouter = express.Router()
const blogsController = require('../controllers/blogsController')

blogsRouter.get('/', blogsController.getAllBlogs)
blogsRouter.post('/', blogsController.postBlog)
blogsRouter.delete('/:id', blogsController.deleteBlog)
blogsRouter.put('/:id', blogsController.updateBlog)


module.exports = blogsRouter