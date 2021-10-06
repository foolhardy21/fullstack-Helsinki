const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.tokenExtractor = function(req, res, next) {
    const authorization = req.get('authorization')
    let token =''
    
    if(authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.substring(7) 
    }
    req.token = token
    next()
}

exports.userExtractor = async function(req, res, next) {
  const token = req.token
  if(token) {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const user = await User.findById(decodedToken.id)
    req.user = user
  }
  next()
}