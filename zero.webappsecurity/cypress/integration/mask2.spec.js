/// <reference types="Cypress" />

context('Guilda com Cypress', () => {

    describe('Suite 1', () => {

        beforeEach(() => {
            cy.visit('http://zero.webappsecurity.com/')
        })

        //TESTE 1
        //Fazer busca na Main Page
        //1 - Validar o Titulo da pagina
        //2 - Validar o retorna da busca
        it('Validar busca na main page', () => {
            cy.get('#searchTerm').type('Online {enter}')
            //cy.get('h2').should('have.text', 'Search Results:')
            cy.get('h2').contains('Search Results:')
            cy.get('a').eq(1).should('have.text', 'Zero - Free Access to Online Banking')
            cy.get('a').eq(2).contains('Zero - Online Statements')
        })

        //TESTE 2
        //Clicar no botao Signin na Main Page
        //1 - Validar existencia do botao de interrogação
        //2 - Validar checkbox esteja desmarcado
        //3 - Validar o alerta de erro ao clicar em signin com os campos vazios
        it('Validar tela de login', () => {
            cy.get('#signin_button').click()
            //cy.get('.signin').click()
            //cy.contains('Signin').click()
            cy.get('#credentials').should('exist').and('be.visible')
            cy.get("input[name='user_remember_me']").should('not.be.checked')
            cy.get('.btn').click()
            cy.get('.alert-error').contains('Login and/or password are wrong.').should('be.visible')
        })

        //TESTE 3
        //Validar funcionamento do carrocel
        it('Validar carrocel', () => {
            cy.get('.left').click({ force: true })
            cy.wait(1000)
            cy.get('.left').click({ force: true })
            cy.wait(1000)
        })


        //TESTE 4
        //cy.Commands
        //Serve para encapsular bloco de testes
        //Command nao precisa importar, já é automatico
        //Serve para reduzir complexidade, facilitar a manutenção, reuso bloco de codigo
        it.only('Uso do commando login', () => {
            cy.login('cypressguilda@dextra-sw.com', 'teste12345')
        })

        //TESTE 5
        //Fazer Scroll ate o link Download WebInspect
        it('Validar funcionamento do scroll', () => {
            cy.get('#download_webinspect_link').scrollIntoView().should('be.visible')
        })

    })
})