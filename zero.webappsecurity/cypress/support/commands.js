// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


//Command nao precisa importar, já é automatico
//Ser ve para encapsular bloco de testes
//Serve para reduzir complexidade, facilitar a manutenção, reuso bloco de codigo
Cypress.Commands.add('login', (login,password) => {
    cy.get('#signin_button').click()
    cy.get('#user_login').type(login)
    cy.get('#user_password').type(password)
    cy.get('.btn').click()
  })