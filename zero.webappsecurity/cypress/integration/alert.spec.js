/// <reference types="Cypress" />

it('Teste com Alertas', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.get('#alert').click()
    cy.on('window:alert', msg => {
        expect(msg).to.be.equal('Alert Simples')
    })
})