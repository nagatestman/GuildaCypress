
context('Guilda com Cypress', () => {

    describe('Suite Teste 1', () => {




    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/')
    })

    //TESTE 1
    //Clicar no botao Signin na Main Page
    //Interacting with elements
    //Varias maneira de interagir com um elemento, ID, Classe, Label, tipos


    //TESTE 2
    //Escrever no campo de busca na Main Page


    //TESTE 3
    //Validar a notificação de login ou pwd errado


    //TESTE 4
    //Ser ve para encapsular bloco de testes
    //Command nao precisa importar, já é automatico
    //Serve para reduzir complexidade, facilitar a manutenção, reuso bloco de codigo


    //TESTE 5
    //Validar checkbox não preenchido no Signin page


    it('.clear() - clears an input or textarea element', () => {
        cy.get('#searchTerm').type('Clear this text')
          .should('have.value', 'Clear this text')
          .clear()
          .should('have.value', '')
      })

    // it('.carrocel - change carrocel', () => {
    //     cy.get('.carousel-control').eq(1).click({force: true})
    //     cy.wait(1000)
    //     cy.get('.carousel-control').eq(1).click({force: true})
    // })

    // it('.scrollIntoView() - scroll an element into view', () => {
    //     cy.get('#download_webinspect_link').scrollIntoView()
    //     .should('be.visible')
    // })
        
})
})