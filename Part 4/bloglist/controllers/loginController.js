const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

exports.getToken = async function(req, res) {
    const user = await User.findOne({username: req.body.username})
    if(user === null) {
        res.status(401).json({
            error: 'invalid username'
        })
    } else if(!await bcrypt.compare(req.body.password, user.passwordHash)) {
        res.status(401).json({
            error: 'invalid password'
        })
    } else {
        const token = jwt.sign({
            username: user.username,
            id: user._id
        }, process.env.SECRET)
        res.status(200).send({token, username: user.username})
    }
}