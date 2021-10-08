import { Cypress, cy } from 'local-cypress'

import selectors from '../selectors/docs'

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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('browseTo', (masthead, subMenu, sidebar) => {
  cy.visit('/')
    .get(selectors.masthead.menuLinks)
    .contains(masthead)
    .siblings('button')
    .click()
    .get(selectors.masthead.subMenuLinks)
    .contains(subMenu)
    .click()

  if (sidebar) {
    cy.get(selectors.sidebar.links).contains(sidebar).click({ force: true })
  }
})

export {}
