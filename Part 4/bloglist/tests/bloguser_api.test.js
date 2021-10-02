const supertest = require('supertest')
const mongoose = require('mongoose')
const User = require('../models/User')
const app = require('../app')

const api = supertest(app)

beforeEach( async () => {
    await User.deleteMany({})
    let user = new User({
        username: 'foolhardy',
        name: 'Vinay Kumar',
        passwordHash: 'binay', 
    })
    await user.save()
    user = new User({
        username: 'wardaddy',
        name: 'Brad Pitt',
        passwordHash: 'fury',
    })
    await user.save()
})

describe('bloguser api',() => {

    test('create a new user', async () => {
        const newUser = {
            username: 'sampleuser',
            name: 'samplename',
            password: 'samplepass',
        }
       const response = await api.post('/api/users')
            .send(newUser)
            .expect(201)
        expect(response.body._id).toBeDefined()
        expect(response.body.username).toBe(newUser.username)
        
        // const response = await api.get('/api/users')
        // const users = response.body.map(user => user.username)

        // expect(users).tohaveLength(3)
        // expect(users).toContain('sampleuser')
        
    },10000)
})

afterAll(() => {
    mongoose.connection.close()
})