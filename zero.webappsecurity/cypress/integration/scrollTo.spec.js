/// <reference types="Cypress" />

describe('Actions', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/')

        cy.clearCookies({log: true})
        cy.clearLocalStorage('your item', {log: true})
    })

    it.only('.scrollIntoView() - scroll an element into view', () => {
        //cy.get('#download_webinspect_link').scrollIntoView().should('be.visible')
        cy.wait(1000)
        cy.scrollTo('0%', '60%')
    })
})