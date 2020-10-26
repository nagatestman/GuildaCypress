

describe('Actions', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/')

        cy.clearCookies({log: true})
        cy.clearLocalStorage('your item', {log: true})
    })

    //EXEMPLO 1
    //Clicar no botao Signin na Main Page
    //Interacting with elements
    //Varias maneira de interagir com um elemento, ID, Classe, Label, tipos
    it.only('.click() - click on a DOM element', () => {
        //cy.get('#signin_button').click()
        //cy.get('.signin').click()
        //cy.contains('Signin').click()
        cy.get("button[type='button']").click()
    })

    //EXEMPLO 2
    //Escrever no campo de busca na Main Page
    it('.type - type into a DOM element', () => {
        cy.get('#searchTerm')
        .type('guildaqa@dextra.com').should('have.value', 'guildaqa@dextra.com')
        .wait(500)
        .type('{selectall}{del}')
        .type('slow.typing@email.com', { delay: 100 })
    })

    //EXEMPLO 3
    //Validar a notificação de login ou pwd errado
    it('.assetion alert', () => {
        cy.get('#signin_button').click()
        cy.get("input[type='submit']").click()
        cy.get('.alert-error').contains('Login and/or password are wrong.').should('be.visible') //or
    })

    it('.clear() - clears an input or textarea element', () => {
        cy.get('#searchTerm').type('Clear this text')
          .should('have.value', 'Clear this text')
          .clear()
          .should('have.value', '')
      })

    it('.carrocel - change carrocel', () => {
        cy.get('.carousel-control').eq(1).click({force: true})
        cy.wait(1000)
        cy.get('.carousel-control').eq(1).click({force: true})
    })

    it('.scrollIntoView() - scroll an element into view', () => {
        cy.get('#download_webinspect_link').scrollIntoView()
        .should('be.visible')
    })

    it('.check() - check a checkbox or radio element', () => {
        cy.get('#signin_button').click()
        cy.get("input[name='user_remember_me']").should('not.be.checked')
        //cy.get("input[type='checkbox']").should('not.be.checked')
        //document.querySelectorAll("input[name='user_remember_me']")
        //document.querySelectorAll("input[type='checkbox']")
    })



    //Command nao precisa importar, já é automatico
    //Ser ve para encapsular bloco de testes
    //Serve para reduzir complexidade, facilitar a manutenção, reuso bloco de codigo
    it('.add commands.js',() => {
        //cy.login('cypressguilda@dextra-sw.com','teste12345 {enter}')
        cy.login('cypressguilda@dextra-sw.com','teste12345')
    })
} )