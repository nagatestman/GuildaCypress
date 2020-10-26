describe('Cypress.$ Function', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Cypress.$ Function', () => {
        const signInButton = Cypress.$('#signin_button')
        signInButton.click()

    })

} )