/* eslint-disable jest/expect-expect */
import { describe, cy, it, before, expect } from 'local-cypress'
// eslint-disable-next-line import/extensions
import selectors from '../../selectors/docs'

describe('Docs Site: Tokens', () => {
  describe('when browsing on desktop', () => {
    before(() => {
      // Block newrelic.js due to issues with Cypress networking
      cy.intercept('**/newrelic.js', (req) => {
        req.reply("console.log('Fake New Relic script loaded');")
      })

      cy.browseTo('Reference', 'Tokens')
    })

    it('should render the sidebar title', () => {
      cy.get(selectors.sidebar.title).should('have.text', 'Tokens')
    })
  })
})
