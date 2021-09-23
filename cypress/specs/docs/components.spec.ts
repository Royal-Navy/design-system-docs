/* eslint-disable jest/expect-expect */
import { describe, cy, it, before, expect } from 'local-cypress'
import { startCase } from 'lodash'

// eslint-disable-next-line import/extensions
import { baseUrl } from '../../../cypress.json'
import selectors from '../../selectors/docs'

const sections = [
  { title: 'Overview', link: '#1-overview' },
  { title: 'Usage', link: '#2-usage' },
  { title: 'Anatomy', link: '#3-anatomy' },
  { title: 'Sizing & Spacing', link: '#4-sizing-spacing' },
  { title: 'Hierarchy & Placement', link: '#5-hierarchy-placement' },
  { title: 'States', link: '#6-states' },
  { title: 'Variations', link: '#7-variations' },
]

describe('Docs Site: Components', () => {
  describe('when browsing on desktop', () => {
    before(() => {
      // Block newrelic.js due to issues with Cypress networking
      cy.intercept('**/newrelic.js', (req) => {
        req.reply("console.log('Fake New Relic script loaded');")
      })

      cy.visit('/components/alert')
    })

    it('Reference navigation item should not redirect user', () => {
      cy.get('a').contains('Reference').click()
      cy.url().should('eq', `${baseUrl}/components/alert#`)
    })

    it('should render the sidebar title', () => {
      cy.get(selectors.sidebar.title).should('have.text', 'Components')
    })

    it('should render the page title', () => {
      cy.get(selectors.layout.h1).should('have.text', 'Alert')
    })

    it('should display the legacy warning banner', () => {
      cy.get(selectors.layout.contentBanner).should(
        'contain',
        'The documentation on this page is considered legacy.'
      )
    })

    it('should construct the breadcrumb correctly', () => {
      cy.get(selectors.layout.breadcrumbItem).should(($bc) => {
        expect($bc, '3 items').to.have.length(3)
        expect($bc.eq(0), 'item 1').to.contain('Home')
        expect($bc.eq(1), 'item 2').to.contain('Components')
        expect($bc.eq(2), 'item 3').to.contain('Alert')
      })
    })

    it('should render the correct sub-headings', () => {
      cy.get(selectors.contentBlock.h2).should(($h2) => {
        expect($h2, '7 items').to.have.length(7)
        expect($h2.eq(0), 'item 1 prefix').to.contain('1')
        expect($h2.eq(0), 'item 1').to.contain('Overview')
        expect($h2.eq(1), 'item 2 prefix').to.contain('2')
        expect($h2.eq(1), 'item 2').to.contain('Usage')
        expect($h2.eq(2), 'item 3 prefix').to.contain('3')
        expect($h2.eq(2), 'item 3').to.contain('Anatomy')
        expect($h2.eq(3), 'item 4 prefix').to.contain('4')
        expect($h2.eq(3), 'item 4').to.contain('Sizing & Spacing')
        expect($h2.eq(4), 'item 5 prefix').to.contain('5')
        expect($h2.eq(4), 'item 5').to.contain('Hierarchy & Placement')
        expect($h2.eq(5), 'item 6 prefix').to.contain('6')
        expect($h2.eq(5), 'item 6').to.contain('States')
        expect($h2.eq(6), 'item 7 prefix').to.contain('7')
        expect($h2.eq(6), 'item 7').to.contain('Variations')
      })
    })

    it('should render the corresponding headings in `OnThisPage` aside', () => {
      cy.get(selectors.onThisPage.item).should(($lis) => {
        expect($lis, '7 items').to.have.length(7)
        expect($lis.eq(0), 'item 1').to.contain('Overview')
        expect($lis.eq(1), 'item 2').to.contain('Usage')
        expect($lis.eq(2), 'item 3').to.contain('Anatomy')
        expect($lis.eq(3), 'item 4').to.contain('Sizing & Spacing')
        expect($lis.eq(4), 'item 5').to.contain('Hierarchy & Placement')
        expect($lis.eq(5), 'item 6').to.contain('States')
        expect($lis.eq(6), 'item 7').to.contain('Variations')
      })
    })

    sections.forEach(({ title, link }, index) => {
      describe(`${title} section`, () => {
        beforeEach(() => {
          cy.get(selectors.onThisPage.item).eq(index).click({ force: true })
        })

        it('should navigate to the relevant sub-heading', () => {
          cy.get(selectors.contentBlock.h2).eq(index).should('be.visible')
          cy.url().should('eq', `${baseUrl}/components/alert${link}`)
        })
      })
    })

    Object.keys(selectors.footer.siteLinks).forEach((siteLinkKey) => {
      const heading = startCase(siteLinkKey)

      describe(`${heading} footer site link`, () => {
        beforeEach(() => {
          cy.get(selectors.footer.siteLinks[siteLinkKey]).click()
        })

        afterEach(() => {
          cy.go('back')
        })

        it('should display the correct page', () => {
          cy.get(selectors.layout.h1).should('have.text', heading)
        })
      })
    })
  })
})

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
            cy.get('a').contains('Tokens').should('not.exist')
          })

          describe('and the second sub menu group is expanded', () => {
            it('should expand the relevant sub menu', () => {
              cy.get(selectors.layout.mastheadMenuExpandButton).eq(1).click()
              cy.get('a').contains('Get started').should('be.visible')
              cy.get('a').contains('Tokens').should('be.visible')
            })

            describe('and the first sub menu group is collapsed', () => {
              it('should collapse the relevant sub menu', () => {
                cy.get(selectors.layout.mastheadMenuExpandButton).eq(0).click()
                cy.get('a').contains('Get started').should('not.exist')
                cy.get('a').contains('Tokens').should('be.visible')
              })
            })
          })
        })
      })
    }
  )
})
