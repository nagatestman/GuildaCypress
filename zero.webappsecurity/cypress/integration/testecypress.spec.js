/// <reference types="Cypress" />

context('Guilda de QA com Cypress', () => {

    describe('Suite de Teste 1', () => {

        beforeEach(() => {
            cy.visit('http://zero.webappsecurity.com//index.html')
        })


        //TESTE 1
        //Fazer busca na Main Page
        //1 - Validar o Titulo da pagina
        //2 - Validar o retorna da busca

        it('Validar busca por Online', () => {
            cy.wait(1000)
            cy.get('#searchTerm').type('Online {enter}')
            cy.get('h2').should('have.text', 'Search Results:')
            cy.get('a').eq(1).should('have.text', 'Zero - Free Access to Online Banking')
            //cy.get('a').contains('Free Access to Online Banking')
        })

        //TESTE 2
        //Clicar no botao Signin na Main Page
        //1 - Validar existencia do botao de interrogação
        //2 - Validar checkbox esteja desmarcado
        //3 - Validar o alerta de erro ao clicar em signin com os campos vazios
        it('Validar tela de sign in', () => {
            cy.get('.signin').click()
            cy.get('#credentials').should('exist').and('be.visible')
            cy.get("input[type='checkbox']").should('not.be.checked')
            cy.get("input[name='submit']").click()
            cy.get('.alert').contains('Login and/or password are wrong.')
        })

        //TESTE 3
        //cy.Commands
        //Serve para encapsular bloco de testes
        //Command nao precisa importar, já é automatico
        //Serve para reduzir complexidade, facilitar a manutenção, reuso bloco de codigo
        it('Uso comando login', () => {
            cy.login('guildaQA@dextra.com','QWER!@#$')
            cy.wait(3000)
        })

        //TESTE 4
        //Fazer Scroll ate o link Download WebInspect
        it.only('Validar funcionamento do scroll', () => {
            cy.get('#download_webinspect_link').scrollIntoView().should('be.visible')
        })
    })
})

