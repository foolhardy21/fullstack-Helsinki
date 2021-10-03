const Blog = require('../models/Blog')
const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.getAllBlogs = async function(req, res) {
  const response = await Blog.find({}).populate('user', { username: 1, name: 1 }) 
  res.status(200).json(response)

}

exports.postBlog = async function(req, res) {
  
  if(!req.body.title && !req.body.url) {
    res.status(400).send('Bad Request')
  } else {
    const user = await User.findOne({username: req.body.username})
    const blog = user ? new Blog({
      title: req.body.title,
      author: req.body.author,
      url: req.body.url,
      likes: req.body.likes || 0,
      user: user._id,
    }) : new Blog({
      title: req.body.title,
      author: req.body.author,
      url: req.body.url,
      likes: req.body.likes || 0,
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

exports.getAllUsers = async function(req, res) {
  const response = await User.find({}).populate('blogs', { title: 1, author: 1, url: 1 })
  res.status(200).json(response)
}

exports.postUser = async function(req, res) {

  if (req.body.password && req.body.password.length >= 3) {
    let blogIds = []
    req.body.blogs.forEach( async (blog) => {
      const response = await Blog.findOne({title: blog})
      blogIds.push(response._id)
    })
    
    const user = new User({
      username: req.body.username,
      name: req.body.name,
      passwordHash: await bcrypt.hash(req.body.password, 10),
      blogs: blogIds,
    })
    await user.save((err, result) => {
      if(err) {
        res.status(400).send('Username should be unique with atleast 3 chars')
      } else {
        res.status(201).send(result)
      }
    })
  } else {
    res.status(400).send('Password should have atleast 3 chars')
  }
  
}