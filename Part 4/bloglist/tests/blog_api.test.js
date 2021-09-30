const supertest = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')
const Blog = require('../models/Blog')

const api = supertest(app)

const initialBlogs = [
    {
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
    },
    {
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
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
    }, 6000)

    test('a new blog is added', async () => {
        const newBlog = {
            title: "Sample blog",
            author: "Sample author",
            url: "http://www.samplelink.com",
            likes: 55,
          }

        await api.post('/api/blogs')
                .send(newBlog)
                .expect(201)

        const response = await api.get('/api/blogs')
        const titles = response.body.map(blog => blog.title)
        expect(titles).toHaveLength(initialBlogs.length+1)
        expect(titles).toContain('Sample blog')

    }, 10000)

    test('likes defaults to 0 when undefined', async () => {
        const newBlog2 = {
            title: "Sample blog2",
            author: "Sample author2",
            url: "http://www.samplelink2.com",
        }

        await api.post('/api/blogs')
                .send(newBlog2)
                .expect(201)
        
        const response = await api.get('/api/blogs')
        const blogs = response.body
        blogs.map(blog => {
            if(blog.title === newBlog2.title) {
                expect(blog.likes).toEqual(0)
            }
        })
          
    }, 10000)

    test('when title or url is missing', async () => {
        const newBlog3 = {
            author: "Sample author2",
            likes: 20,
        }
        await api.post('/api/blogs')
                .send(newBlog3)
                .expect(400)
                .expect('Bad Request')
    })

})

afterAll(() => {
    mongoose.connection.close()
})

