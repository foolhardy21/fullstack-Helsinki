const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true, minLength: 3},
    name: String,
    passwordHash: String, 
    blogs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Blog'}]
})

const User = mongoose.model('User', userSchema)

module.exports = User