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


        //TESTE 2
        //Clicar no botao Signin na Main Page
        //1 - Validar existencia do botao de interrogação
        //2 - Validar checkbox esteja desmarcado
        //3 - Validar o alerta de erro ao clicar em signin com os campos vazios


        //TESTE 3
        //Validar funcionamento do carrocel


        //TESTE 4
        //Entender o cy.Commands
        //Serve para encapsular bloco de testes
        //Command nao precisa importar, já é automatico
        //Serve para reduzir complexidade, facilitar a manutenção, reuso bloco de codigo


        //TESTE 5
        //Fazer Scroll ate o link Download WebInspect


    })
})