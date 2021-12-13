/* eslint-disable jest/expect-expect */
import { describe, cy, it, before } from 'local-cypress'
import { selectors as tokenSelectors } from '@defencedigital/design-tokens'

// eslint-disable-next-line import/extensions
import { hexToRgb } from '../../helpers'
import { secondaryBackgroundColor } from '../../../components/presenters/Docs/HeroCard/partials/StyledHeroCard'
import selectors from '../../selectors/docs'

const { color } = tokenSelectors

const sections = [
  'Get Started',
  'Design Principles',
  'Design System Reference',
  'Resources',
  'Get Involved',
]

const COLOUR_TOKENS = 'Colour Tokens'
const LEARNING_RESOURCES = 'Learning resources'

function assertSectionTitle(expected: string) {
  cy.get(selectors.homepage.sectionTitles)
    .eq(sections.indexOf(expected))
    .should('have.text', expected)
}

describe('Docs Site: Homepage', () => {
  describe(
    'when browsing on desktop',
    {
      viewportHeight: 800,
      viewportWidth: 1200,
    },
    () => {
      before(() => {
        cy.blockNewRelic()

        cy.visit('/')
      })

      it('should render the hero', () => {
        cy.get(selectors.homepage.hero.title).should('be.visible')
      })

      it('should render the `Get Started` section', () => {
        assertSectionTitle('Get Started')

        const heroCards = cy.get(selectors.homepage.getStarted.heroCards)
        heroCards.should('have.length', 2)
      })

      it('should render the `Designers` hero card', () => {
        const heroCards = cy.get(selectors.homepage.getStarted.heroCards)
        const designersHeroCard = heroCards.eq(0)

        designersHeroCard.should('be.visible')
        designersHeroCard.should(
          'have.css',
          'background-color',
          `${hexToRgb(color('action', '600'))}`
        )
        designersHeroCard.children('span').should('have.text', 'Designers')

        cy.get(selectors.homepage.getStarted.heroCardChildren)
          .eq(0)
          .children('a')

          .should('have.text', 'Download static library')
          .invoke('attr', 'href')
          .then((href) => {
            cy.request(href).its('status').should('eq', 200)
          })

        cy.get(selectors.homepage.getStarted.heroCardChildren)
          .eq(1)
          .children('a')
          .should('have.text', 'Download interactive library')
          .invoke('attr', 'href')
          .then((href) => {
            cy.request(href).its('status').should('eq', 200)
          })
      })

      it('should render the `Developers` hero card', () => {
        const heroCards = cy.get(selectors.homepage.getStarted.heroCards)
        const developersHeroCard = heroCards.eq(1)

        developersHeroCard.should('be.visible')
        developersHeroCard.should(
          'have.css',
          'background-color',
          `${hexToRgb(secondaryBackgroundColor)}`
        )
        developersHeroCard.children('span').should('have.text', 'Developers')

        cy.get(selectors.homepage.getStarted.heroCardChildren)
          .eq(3)
          .should('contain.text', 'npm install')
      })

      it('should render the `Design Principles` section', () => {
        assertSectionTitle('Design Principles')
      })

      it('should render the `Design System Reference` section', () => {
        assertSectionTitle('Design System Reference')
      })

      it('should render the `Resources` section', () => {
        assertSectionTitle('Resources')
      })

      it('should render the `Get Involved` section', () => {
        assertSectionTitle('Get Involved')
      })
    }
  )

  describe(
    'when browsing on mobile',
    {
      viewportHeight: 1000,
      viewportWidth: 500,
    },
    () => {
      before(() => {
        cy.blockNewRelic()

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
            cy.get('a').contains(LEARNING_RESOURCES).should('be.visible')
            cy.get('a').contains(COLOUR_TOKENS).should('not.exist')
          })

          describe('and the second sub menu group is expanded', () => {
            it('should expand the relevant sub menu', () => {
              cy.get(selectors.layout.mastheadMenuExpandButton).eq(1).click()
              cy.get('a').contains(LEARNING_RESOURCES).should('be.visible')
              cy.get('a').contains(COLOUR_TOKENS).should('be.visible')
            })

            describe('and the first sub menu group is collapsed', () => {
              it('should collapse the relevant sub menu', () => {
                cy.get(selectors.layout.mastheadMenuExpandButton).eq(0).click()
                cy.get('a').contains(LEARNING_RESOURCES).should('not.exist')
                cy.get('a').contains(COLOUR_TOKENS).should('be.visible')
              })
            })
          })
        })

        describe('when clicking outside the mobile menu', () => {
          it('should close the mobile menu', () => {
            cy.get(selectors.layout.masthead).click()
            cy.get(selectors.layout.mastheadMenuExpandButton).should(
              'be.visible'
            )
          })
        })
      })
    }
  )
})
