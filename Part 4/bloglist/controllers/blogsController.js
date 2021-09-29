const Blog = require('../models/Blog')

exports.getAllBlogs = async function(req, res, next) {
  const response = await Blog.find({})  
  res.status(200).json(response)

}

exports.postBlog = async function(req, res, next) {
  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    url: req.body.url,
    likes: req.body.likes || 0
  })
  const response = await blog.save()
  res.status(201).json(response) 

}
