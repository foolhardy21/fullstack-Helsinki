const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
  comments: [{type: String}],
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

const Blog = mongoose.model('Blog',blogSchema)

module.exports = Blog
