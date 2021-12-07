/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    browseTo: (masthead?: string, subMenu?: string, sidebar?: string) => void
    blockNewRelic: () => void
  }
}
