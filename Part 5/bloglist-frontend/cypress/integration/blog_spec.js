/* eslint-disable no-undef */
describe('cypress', function() {

    beforeEach(function() {
        cy.request('POST', 'http://localhost:3003/api/testing/reset')
        cy.visit('http://localhost:3000')
    })
    it('login page', function() {
        // cy.visit('http://localhost:3000')
        cy.contains('log in to application')
        cy.contains('username')
        cy.contains('password')
    })
})