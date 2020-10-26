/// <reference types="Cypress" />

describe('API Test with Cypress', () => {
    
    Cypress.config('baseUrl', 'https://dummy.restapiexample.com/api/v1')
    
    it('.get - read', () => {
        cy.request({method: 'GET', url: '/employees'}).then(response => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(24)
        })
    })

    it('.post - create', () => {
        const item = {"name":"test", "salary":"123", "age":"23"}
        cy.request({method: 'POST', url: '/create'}, item)
    })
})