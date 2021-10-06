const jwt = require('jsonwebtoken')
const Blog = require('../models/Blog')
const User = require('../models/User')


exports.getAllBlogs = async function(req, res) {
  const response = await Blog.find({}).populate('user', { username: 1, name: 1 }) 
  res.status(200).json(response)

}

exports.postBlog = async function(req, res) {
  
  if(!req.body.title || !req.body.url) {
    res.status(400).send('Bad Request')
  } else {
    const token = req.token
    const decodedToken = jwt.verify(token, process.env.SECRET)
    
    if(!token || !decodedToken.id) {
      res.status(401).send('invalid token')
    }
    
    const user = await User.findById(decodedToken.id)

    const blog = new Blog({
      title: req.body.title,
      author: req.body.author,
      url: req.body.url,
      likes: req.body.likes || 0,
      user: user._id
    })
    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()

    res.status(201).json({
      blog: savedBlog._id,
      username: user.username,
    }) 
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
  const user = await User.findOne({username: req.body.username})
    const blog = user ? {
      title: req.body.title,
      author: req.body.author,
      url: req.body.url,
      likes: req.body.likes || 0,
      user: user._id,
    } : {
      title: req.body.title,
      author: req.body.author,
      url: req.body.url,
      likes: req.body.likes || 0,
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
