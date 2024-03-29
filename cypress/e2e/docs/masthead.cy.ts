import { cy, after, before } from 'local-cypress'

import selectors from '../../selectors/docs'

const items = [
  {
    title: 'Guidance',
    hasPage: true,
    subItems: [
      'Design',
      'Development',
      'Installation & quick start',
      'Learning resources',
      'Migrating to v3',
    ],
  },
  {
    title: 'Reference',
    subItems: ['Tokens', 'Components', 'Patterns', 'Compound Timeline'],
  },
  {
    title: 'Resources',
    hasPage: true,
    subItems: ['Packages'],
  },
  { title: 'Help', hasPage: true },
]

describe('Masthead', () => {
  describe('default', () => {
    beforeEach(() => {
      cy.blockNewRelic()

      cy.visit('/')
    })

    items.forEach(({ title, hasPage, subItems }, itemIndex) => {
      it(`should render the ${title} menu item`, () => {
        cy.get(selectors.masthead.menuLinks)
          .eq(itemIndex)
          .should('have.text', title)
      })

      if (hasPage) {
        describe(`when the ${title} menu item is clicked`, () => {
          it(`should render the ${title} page`, () => {
            cy.get(selectors.masthead.menuLinks)
              .eq(itemIndex)
              .click()
              .get(selectors.layout.h1)
              .should('have.text', title)
          })
        })
      } else {
        describe(`when the ${title} menu item is clicked`, () => {
          beforeEach(() => {
            cy.get(selectors.masthead.menuLinks).eq(itemIndex).click()
          })

          subItems.forEach((subItem, subItemIndex) => {
            it(`should render the ${subItem} sub item`, () => {
              cy.get(selectors.masthead.subMenuLinks)
                .eq(subItemIndex)
                .should('have.text', subItem)
            })
          })
        })
      }

      if (subItems) {
        describe(`should render the ${title} sub items`, () => {
          beforeEach(() => {
            cy.get(selectors.masthead.expandButtons).eq(itemIndex).click()
          })

          subItems.forEach((subItem, subItemIndex) => {
            it(`should render the ${subItem} sub item`, () => {
              cy.get(selectors.masthead.subMenuLinks)
                .eq(subItemIndex)
                .should('have.text', subItem)
            })
          })
        })
      } else {
        it(`should not render a sub menu for ${title}`, () => {
          cy.get(selectors.masthead.menuLinks)
            .eq(itemIndex)
            .siblings('button')
            .should('not.exist')
        })
      }
    })
  })
})
