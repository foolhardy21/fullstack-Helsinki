const blogsRouter = require('express').Router()
const Blog = require('../models/Blog')

blogsRouter.get('/api/blogs',(request,response) => {
  Blog.find({})
  .then(blogs => {
    response.json(blogs)
  })
  .catch(error => logger.info(error.message))
})

blogsRouter.post('/api/blogs',(request,response) => {
  const blog = new Blog(request.body)

  blog.save()
  .then(result => {
    response.status(201).json(result)
  })
})

module.exports = blogsRouter
