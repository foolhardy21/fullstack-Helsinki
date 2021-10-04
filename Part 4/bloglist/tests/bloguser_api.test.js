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
            blogs: ['React patterns', 'Go To Statement Considered Harmful'],
        }
        
       const response = await api.post('/api/users')
            .send(newUser)
            .expect(201)
        expect(response.body._id).toBeDefined()
        expect(response.body.username).toBe(newUser.username)
        
        const response2 = await api.get('/api/users')
                                    .expect(200)
        const users = response2.body.map(user => user.username)
        expect(users).toHaveLength(3)
        expect(users).toContain('sampleuser')
        
    },10000)

    test('password length check', async () => {
        const newUser = {
            username: 'sampleuser',
            name: 'samplename',
            password: '',
        }
        const response = await api.post('/api/users')
                                    .send(newUser)
                                    .expect(400)
        expect(response.text).toContain('atleast 3 chars')
    },10000)

    test('username length check', async () => {
        const newUser = {
            username: 'sa',
            name: 'samplename2',
            password: 'samplepass2',
        }
        const response = await api.post('/api/users')
                                    .send(newUser)
                                    .expect(400)
        expect(response.text).toContain('atleast 3 chars')
    },10000)
    
    test('username unique check', async () => {
        const newUser = {
            username: 'wardaddy',
            name: 'samplename2',
            password: 'samplepass2',
        }
        const response = await api.post('/api/users')
                                    .send(newUser)
                                    .expect(400)
        expect(response.text).toContain('unique')
    },10000)
})

afterAll(() => {
    mongoose.connection.close()
})