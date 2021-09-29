const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/Blog')

const api = supertest(app)
const initialBlogs = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
]

beforeEach(async () => {
   await Blog.deleteMany({})
    let blogObj = new Blog(initialBlogs[0])
    await blogObj.save()
    blogObj = new Blog(initialBlogs[1])
    await blogObj.save()
})

describe('blog api', () => {

    test('blogs are returned as json', async () => {
       await api.get('/api/blogs')
                .expect(200)
                .expect('Content-Type', /application\/json/)
    },6000)

    test('there are two blogs', async () => {
        const response = await api.get('/api/blogs')
        expect(response.body).toHaveLength(initialBlogs.length)
    },6000)

    test('the first blog is about React Patters', async () => {
        const response = await api.get('/api/blogs')
        expect(response.body[0].title).toContain('React patterns')
    },6000)

    test('unique identifier _id is defined', async () => {
        const response = await api.get('/api/blogs')
        expect(response.body[0]._id).toBeDefined()
    })
})

afterAll(() => {
    mongoose.connection.close()
})

