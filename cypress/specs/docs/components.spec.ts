/* eslint-disable jest/expect-expect */
import { describe, cy, it, before, expect } from 'local-cypress'
import { selectors as designTokensSelectors } from '@royalnavy/design-tokens'
import { startCase } from 'lodash'

// eslint-disable-next-line import/extensions
import { baseUrl } from '../../../cypress.json'
import selectors from '../../selectors/docs'
import { hexToRgb } from '../../helpers'

const { color } = designTokensSelectors

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

      cy.visit('/components')
    })

    it('should not display the legacy warning banner', () => {
      cy.get(selectors.layout.contentBanner).should('not.exist')
    })
  })
})

describe('Docs Site: Components/Alert', () => {
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

        it('should set the `OnThisPage` item as active', () => {
          cy.get(selectors.onThisPage.item)
            .eq(index)
            .should(
              'have.css',
              'border-left',
              `4px solid ${hexToRgb(color('neutral', '400'))}`
            )
        })

        it('should navigate to the relevant sub-heading', () => {
          cy.get(selectors.contentBlock.h2).eq(index).should('be.visible')
          cy.url().should('eq', `${baseUrl}/components/alert${link}`)
        })
      })
    })

    describe('when the third `OnThisPage` item has been clicked', () => {
      before(() => {
        cy.get(selectors.onThisPage.item).eq(2).click({ force: true })
      })

      describe('and `Notifications` sidebar item is clicked', () => {
        before(() => {
          cy.get(selectors.sidebar.links).eq(2).click()
        })

        it('should set the `OnThisPage` first item as active', () => {
          cy.get(selectors.onThisPage.item)
            .eq(0)
            .should(
              'have.css',
              'border-left',
              `4px solid ${hexToRgb(color('neutral', '400'))}`
            )
        })
      })
    })

    describe('sidebar', () => {
      it('should render the title', () => {
        cy.get(selectors.sidebar.title).should('have.text', 'Components')
      })

      it('should render the `Overview` link', () => {
        cy.get(selectors.sidebar.links)
          .eq(0)
          .click()
          .get(selectors.layout.h1)
          .should('have.text', 'Components')
          .go('back')
      })

      describe('the `Storybook` link', () => {
        it('should be valid', () => {
          cy.get(`${selectors.sidebar.iconLinks}`)
            .eq(0)
            .invoke('attr', 'href')
            .then((href) => {
              cy.request(href).its('status').should('eq', 200)
            })
        })
      })

      describe('when the `Axure design libraries` link is clicked', () => {
        it('should render the `Design` page', () => {
          cy.get(selectors.sidebar.iconLinks)
            .eq(1)
            .click()
            .get(selectors.layout.h1)
            .should('have.text', 'Design')
            .go('back')
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
