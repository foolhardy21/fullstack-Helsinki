/* eslint-disable no-undef */
describe('blog E2E', function() {

    beforeEach(function() {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        cy.request('POST','http://localhost:3003/api/users',{
            username: 'username1',
            name:'name1',
            password: 'pass1'
        })
        cy.visit('http://localhost:3000')
    })

    it('login page rendering', function() {
        cy.contains('log in to application')
        cy.contains('username')
        cy.contains('password')
    })
    describe('login form works correctly', function() {
        const correctUser = {
            username: 'username1',
            password: 'pass1'
        }
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
})