const Blog = require('../models/Blog')
const User = require('../models/User')
const router = require('express').Router()

router.post('/', async function(req, res) {
    await Blog.deleteMany({})
    await User.deleteMany({})
    
    res.status(204).send('documents deleted')
})

module.exports = router
