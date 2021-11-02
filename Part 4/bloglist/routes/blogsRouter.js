const express = require('express')
const blogsRouter = express.Router()
const blogsController = require('../controllers/blogsController')
const middleware = require('../util/middleware')

blogsRouter.get('/', blogsController.getAllBlogs)
blogsRouter.post('/',middleware.userExtractor, blogsController.postBlog)
blogsRouter.put('/:id/comments', blogsController.addCommenttoBlog)
blogsRouter.put('/:id', blogsController.updateBlog)
blogsRouter.delete('/:id', blogsController.deleteBlog)

module.exports = blogsRouter