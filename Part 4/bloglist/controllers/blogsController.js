const Blog = require('../models/Blog')

exports.getAllBlogs = async function(req, res) {
  const response = await Blog.find({})  
  res.status(200).json(response)

}

exports.postBlog = async function(req, res) {
  
  if(!req.body.title && !req.body.url) {
    res.status(400).send('Bad Request')
  } else {
    const blog = new Blog({
      title: req.body.title,
      author: req.body.author,
      url: req.body.url,
      likes: req.body.likes || 0
    })
    const response = await blog.save()
    res.status(201).json(response) 
  }

}

exports.deleteBlog = async function(req, res, next) {
  await Blog.findByIdAndRemove(req.params.id, (err, result) => {
    if(err) {
      res.send('Error in deleting')
      next(err)
    } else {
      res.json(result)
    }
  })
}

exports.updateBlog = async function(req, res, next) {
  console.log(req.body)
  const blog = {
    title: req.body.title,
    author: req.body.author,
    url: req.body.url,
    likes: req.body.likes || 0
  }
  await Blog.findByIdAndUpdate(req.params.id, blog, {new: true}, (err, result) => {
    if(err){
      res.send('Erro in updating')
      next(err)
    } else {
      res.json(result)
    }
  })
}

