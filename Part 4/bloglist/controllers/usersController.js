const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.getAllUsers = async function(req, res) {
    const response = await User.find({}).populate('blogs', { title: 1, author: 1, url: 1 })
    res.status(200).json(response)
}
  
exports.postUser = async function(req, res) {
  
    if (req.body.password && req.body.password.length >= 3) {
        const user = new User({
        username: req.body.username,
        name: req.body.name,
        passwordHash: await bcrypt.hash(req.body.password, 10),
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