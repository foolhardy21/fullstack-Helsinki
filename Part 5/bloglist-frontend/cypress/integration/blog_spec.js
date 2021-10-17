/* eslint-disable no-undef */
describe('blog E2E', function() {
    
    const correctUser = {
        username: 'username1',
        name: 'name1',
        password: 'pass1'
    }

    beforeEach(function() {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        cy.request('POST','http://localhost:3003/api/users',{
            username: correctUser.username,
            name:correctUser.name,
            password: correctUser.password
        })
        cy.visit('http://localhost:3000')
    })

    it('login page rendering', function() {
        cy.contains('log in to application')
        cy.contains('username')
        cy.contains('password')
    })

    describe('login works correctly', function() {
        const wrongUser = {
            username: 'user',
            password: 'pass'
        }
        it('when credentials are right', function() {
            cy.get('input[name=username_input]').type(correctUser.username)
            cy.get('input[name=password_input]').type(correctUser.password)
            cy.get('#loginBtn').click()
            cy.contains(`${correctUser.username} logged in`)
        })
        it('when credentials are wrong', function() {
            cy.get('input[name=username_input]').type(wrongUser.username)
            cy.get('input[name=password_input]').type(wrongUser.password)
            cy.get('#loginBtn').click()
            cy.contains('invalid')
            cy.contains('log in to application')
        })
    })

    describe('blogs page works correctly', function() {
        beforeEach( async function() {
            const response = await cy.request('POST', 'http://localhost:3003/api/login', {
                username: correctUser.username,
                password: correctUser.password
            })
            localStorage.setItem('user', JSON.stringify(response.body))
            cy.visit('http://localhost:3000')
        })
        it('posting a blog', function() {
            const blog = {
                title: 'title1',
                author: 'author1',
                likes: 1,
                url: 'url1'
            }
            const user = JSON.parse(window.localStorage.getItem('user'))
            Cypress.Commands.add('createBlog', ( blog ) => {
                cy.request({
                    url: 'http://localhost:3003/api/blogs',
                    method: 'POST',
                    body: blog,
                    headers: {
                        'Authorization': `bearer ${user.token}`
                    }
                })
            })
            cy.createBlog(blog)
        })
        it('like a blog', async function() {
            const blog = {
                title: 'title1',
                author: 'author1',
                likes: 1,
                url: 'url1'
            }
            const user = JSON.parse(window.localStorage.getItem('user'))
            Cypress.Commands.add('createBlog', ( blog ) => {
                cy.request({
                    url: 'http://localhost:3003/api/blogs',
                    method: 'POST',
                    body: blog,
                    headers: {
                        'Authorization': `bearer ${user.token}`
                    }
                })
            })
            cy.createBlog(blog)

            cy.contains('more').click()
            cy.contains('like').click()
            cy.get('#infodiv').contains(`2`)
        })
    })


})