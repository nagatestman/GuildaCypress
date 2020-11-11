/// <reference types="Cypress" />

context('Guilda com Cypress', () => {

    describe('Suite 1', () => {

        beforeEach(() => {
            cy.visit('http://zero.webappsecurity.com/')
        })

        it('validar locators com xpath', ()=> {
            cy.xpath('//input')
        })


    })
})