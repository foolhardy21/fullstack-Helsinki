const express = require('express')
const blogsRouter = express.Router()
const blogsController = require('../controllers/blogsController')
const middleware = require('../util/middleware')

blogsRouter.get('/', blogsController.getAllBlogs)
blogsRouter.post('/',middleware.tokenExtractor, blogsController.postBlog)
blogsRouter.delete('/:id', blogsController.deleteBlog)
blogsRouter.put('/:id', blogsController.updateBlog)


module.exports = blogsRouter