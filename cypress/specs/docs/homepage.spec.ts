/* eslint-disable jest/expect-expect */
import { describe, cy, it, before } from 'local-cypress'

// eslint-disable-next-line import/extensions
import selectors from '../../selectors/docs'

describe('Docs Site: Homepage', () => {
  describe('when browsing on desktop', () => {
    before(() => {
      // Block newrelic.js due to issues with Cypress networking
      cy.intercept('**/newrelic.js', (req) => {
        req.reply("console.log('Fake New Relic script loaded');")
      })

      cy.visit('/')
    })

    it('should not render a sub menu for top level navigation items without children', () => {
      cy.get('a').contains('Help').siblings('button').should('not.exist')
    })
  })

  describe(
    'when browsing on mobile',
    {
      viewportHeight: 1000,
      viewportWidth: 500,
    },
    () => {
      before(() => {
        // Block newrelic.js due to issues with Cypress networking
        cy.intercept('**/newrelic.js', (req) => {
          req.reply("console.log('Fake New Relic script loaded');")
        })

        cy.visit('/')
      })

      describe('when the mobile navigation is opened', () => {
        it('should open the mobile navigation', () => {
          cy.get(selectors.layout.mastheadToggleButton).click()
          cy.get(selectors.layout.mastheadMenuExpandButton).should('be.visible')
        })

        describe('and the first sub menu group is expanded', () => {
          it('should expand the relevant sub menu', () => {
            cy.get(selectors.layout.mastheadMenuExpandButton).eq(0).click()
            cy.get('a').contains('Get started').should('be.visible')
            cy.get('a').contains('Alert').should('not.exist')
          })

          describe('and the second sub menu group is expanded', () => {
            it('should expand the relevant sub menu', () => {
              cy.get(selectors.layout.mastheadMenuExpandButton).eq(1).click()
              cy.get('a').contains('Get started').should('be.visible')
              cy.get('a').contains('Alert').should('be.visible')
            })

            describe('and the first sub menu group is collapsed', () => {
              it('should collapse the relevant sub menu', () => {
                cy.get(selectors.layout.mastheadMenuExpandButton).eq(0).click()
                cy.get('a').contains('Get started').should('not.exist')
                cy.get('a').contains('Alert').should('be.visible')
              })
            })
          })
        })
      })
    }
  )
})
