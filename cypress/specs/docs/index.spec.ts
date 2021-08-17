/* eslint-disable jest/expect-expect */
import { describe, cy, it, before, expect } from 'local-cypress'
// eslint-disable-next-line import/extensions
import { baseUrl } from '../../../cypress.json'
import selectors from '../../selectors/docs'

const sections = [
  { title: 'Overview', link: '#1Overview' },
  { title: 'Usage', link: '#2Usage' },
  { title: 'Anatomy', link: '#3Anatomy' },
  { title: 'Sizing & Spacing', link: '#4SizingSpacing' },
  { title: 'Hierarchy & Placement', link: '#5HierarchyPlacement' },
  { title: 'States', link: '#6States' },
  { title: 'Variations', link: '#7Variations' },
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
  })
})
