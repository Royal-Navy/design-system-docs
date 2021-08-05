/* eslint-disable jest/expect-expect */
import { describe, cy, it, before } from 'local-cypress'
// eslint-disable-next-line import/extensions
import { baseUrl } from '../../../cypress.json'
import selectors from '../../selectors'

const content = [
  { text: 'Home', link: 'home' },
  { text: 'Motivation', link: 'motivation' },
  { text: 'Live Example', link: 'liveExample', hasLiveExample: true },
  { text: 'Installation', link: 'installation', hasCodeBlock: true },
  {
    text: 'Compound Components & Composition',
    link: 'compoundComponentsComposition',
  },
  {
    text: 'Custom Component Presentation',
    link: 'customComponentPresentation',
    hasCodeBlock: true,
  },
  { text: 'Context Provider', link: 'contextProvider', hasCodeBlock: true },
  { text: 'Hooks', link: 'hooks', hasCodeBlock: true },
  { text: 'Advanced Custom Layouts', link: 'advancedCustomLayouts' },
  { text: 'Hook APIs', link: 'hookApIs' },
  {
    text: 'useTimelineFrame',
    link: 'useTimelineFrame',
    hasApiReturnTable: true,
  },
  {
    text: 'useTimelinePosition',
    link: 'useTimelinePosition',
    hasApiTable: true,
    hasApiReturnTable: true,
  },
  {
    text: 'useTimelineZoom',
    link: 'useTimelineZoom',
    hasApiReturnTable: true,
  },
  { text: 'Component APIs', link: 'componentApIs' },
  { text: 'Timeline', link: 'timeline', hasApiTable: true },
  {
    text: 'TimelineTodayMarker',
    link: 'timelineTodayMarker',
    hasApiTable: true,
  },
  {
    text: 'TimelineSide (Deprecated)',
    link: 'timelineSideDeprecated',
    hasApiTable: true,
  },
  { text: 'TimelineMonths', link: 'timelineMonths', hasApiTable: true },
  { text: 'TimelineWeeks', link: 'timelineWeeks', hasApiTable: true },
  { text: 'TimelineDays', link: 'timelineDays', hasApiTable: true },
  { text: 'TimelineHours', link: 'timelineHours', hasApiTable: true },
  { text: 'TimelineRows', link: 'timelineRows', hasApiTable: true },
  { text: 'TimelineRow', link: 'timelineRow', hasApiTable: true },
  { text: 'TimelineEvents', link: 'timelineEvents', hasApiTable: true },
  { text: 'TimelineEvent', link: 'timelineEvent', hasApiTable: true },
  { text: 'Roadmap', link: 'roadmap' },
  { text: 'Contributing', link: 'contributing' },
  { text: 'Changelog', link: 'changelog' },
  { text: 'License', link: 'license' },
]

describe('Compound Timeline', () => {
  describe('when browsing on desktop', () => {
    before(() => {
      // Block newrelic.js due to issues with Cypress networking
      cy.intercept('**/newrelic.js', (req) => {
        req.reply("console.log('Fake New Relic script loaded');")
      })

      cy.visit('/timeline')
    })

    it('should render the sidebar title', () => {
      cy.get(selectors.sidebar.title).should('have.text', 'Compound Timeline')
    })

    it('should render the hero', () => {
      cy.get(selectors.hero.title).should('have.text', 'Compound Timeline')
      cy.get(selectors.hero.description).should('be.visible')
    })

    content.forEach(
      (
        {
          text,
          link,
          hasApiTable,
          hasApiReturnTable,
          hasLiveExample,
          hasCodeBlock,
        },
        index
      ) => {
        describe(`${text} content`, () => {
          beforeEach(() => {
            cy.get(selectors.sidebar.link).eq(index).click()
          })

          it(`should render the sidebar ${text} link`, () => {
            cy.get(selectors.sidebar.link).eq(index).should('have.text', text)
            cy.url().should('eq', `${baseUrl}/timeline#${link}`)
          })

          if (text !== 'Home') {
            it(`should render the ${text} content`, () => {
              cy.get(`#${link} h2`).should('have.text', text)
              cy.get(`#${link} p`).should('be.visible')
            })
          }

          if (hasApiTable) {
            it(`should render the ${text} API table`, () => {
              cy.get(`#${link} ${selectors.apiTable.apiTable}`).should(
                'be.visible'
              )
            })
          }

          if (hasApiReturnTable) {
            it(`should render the ${text} API return table`, () => {
              cy.get(`#${link} ${selectors.apiTable.apiReturnTable}`).should(
                'be.visible'
              )
            })
          }

          if (hasLiveExample) {
            it(`should render the ${text} live example`, () => {
              cy.get(`#${link} ${selectors.liveExample.liveExample}`).should(
                'be.visible'
              )
            })
          }

          if (hasCodeBlock) {
            it(`should render the ${text} code block`, () => {
              cy.get(`#${link} ${selectors.codeBlock.codeBlock}`).should(
                'be.visible'
              )
            })
          }
        })
      }
    )
  })
})
