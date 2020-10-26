/// <reference types="cypress" />

describe('Testes Dinamicos', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    const nomecomida = ['Carne', 'Frango', 'Pizza', 'Vegetariana']
    const indicecomida = ['0', '1', '2', '3']
    let i = 0
    indicecomida.forEach(numero  => {
        it(`Cadastro com a comida ${nomecomida[i++]}`, () => {
            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('Qualquer')
            cy.get('#formSexoMasc').as('usemasc')
            cy.get('@usemasc').click()
            cy.get('#formEscolaridade').select('Mestrado')
            cy.get('#formComidaFavorita tbody tr td').eq(numero).click()    
        })
    })
})