const Blog = require('../models/Blog')

exports.getAllBlogs = function(req, res, next) {
  Blog.find({})
  .then(response => {
    res.json(response)
  })
}

exports.postBlog = function(req, res, next) {
  const blog = new Blog({
    title: req.body.title,
    author: req.body.author,
    url: req.body.url,
    likes: req.body.likes
  })
  blog.save()
    .then(result => {
      res.json(result)
    })
}
