import React from 'react'
import Link from 'next/link'
import '@testing-library/jest-dom/extend-expect'
import {
  render,
  RenderResult,
  fireEvent,
  waitFor,
} from '@testing-library/react'

import {
  Masthead,
  MastheadMenu,
  MastheadMenuItem,
  MastheadSubMenu,
  MastheadSubMenuItem,
} from '.'

jest.mock('next/link', () => {
  return ({ children }) => children
})

describe('Masthead', () => {
  let wrapper: RenderResult

  describe('with required props', () => {
    beforeEach(() => {
      wrapper = render(
        <>
          <div data-testid="outside" />
          <Masthead version="3.0.0">
            <MastheadMenu>
              <MastheadMenuItem link={<Link href="#guidance">Guidance</Link>} />
              <MastheadMenuItem
                link={<Link href="#principles">Principles</Link>}
              />
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <MastheadMenuItem link={<Link href="#">Reference</Link>}>
                <MastheadSubMenu>
                  <MastheadSubMenuItem
                    link={<Link href="#design-tokens">Design Tokens</Link>}
                  />
                </MastheadSubMenu>
              </MastheadMenuItem>
              <MastheadMenuItem
                link={<Link href="#resources">Resources</Link>}
              />
              <MastheadMenuItem link={<Link href="#help">Help</Link>} />
              <MastheadMenuItem link={<Link href="#blog">Blog</Link>} />
            </MastheadMenu>
          </Masthead>
        </>
      )
    })

    it('render the version', () => {
      expect(wrapper.queryByText('3.0.0')).toBeInTheDocument()
    })

    it('should not display the sub navigation', () => {
      expect(wrapper.queryByText('Design Tokens')).not.toBeInTheDocument()
    })

    it('should not set the `aria-label` attribute on the `Reference` menu item', () => {
      expect(wrapper.getByText('Guidance')).not.toHaveAttribute('aria-label')
    })

    it('should set the `aria-label` attribute on the `Reference` menu item', () => {
      expect(wrapper.getByText('Reference')).toHaveAttribute(
        'aria-label',
        'Show menu'
      )
    })

    describe('and the user clicks the expand nav button', () => {
      beforeEach(() => {
        fireEvent.click(wrapper.getByTestId('masthead-menu-expand-button'))
      })

      it('should display the sub navigation', () => {
        expect(wrapper.queryByText('Design Tokens')).toBeInTheDocument()
      })

      describe.skip('and the user clicks outside of the sub menu', () => {
        beforeEach(() => {
          fireEvent.click(wrapper.getByTestId('outside'))
        })

        it('hides the sub menu', () => {
          return waitFor(() => {
            expect(
              wrapper.queryByTestId('masthead-sub-menu')
            ).not.toBeInTheDocument()
          })
        })
      })

      describe('and the user clicks on a navigation item', () => {
        beforeEach(() => {
          fireEvent.click(wrapper.getByTestId('masthead-sub-menu'))
        })

        it('hides the sub menu', () => {
          return waitFor(() => {
            expect(
              wrapper.queryByTestId('masthead-sub-menu')
            ).not.toBeInTheDocument()
          })
        })
      })
    })

    describe('and the user clicks the menu item title', () => {
      let clickEventSpy: MouseEvent

      beforeEach(() => {
        clickEventSpy = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })

        Object.assign(clickEventSpy, { preventDefault: jest.fn() })

        fireEvent(wrapper.getByText('Reference'), clickEventSpy)
      })

      it('should invoke preventDefault', () => {
        expect(clickEventSpy.preventDefault).toHaveBeenCalledTimes(1)
      })

      it('should show the sub navigation', () => {
        expect(wrapper.queryByText('Design Tokens')).toBeInTheDocument()
      })

      it('should set the `aria-label` attribute on the `Reference` menu item', () => {
        expect(wrapper.getByText('Reference')).toHaveAttribute(
          'aria-label',
          'Hide menu'
        )
      })

      describe('and the user clicks the menu item title again', () => {
        beforeEach(() => {
          wrapper.getByText('Reference').click()
        })

        it('should hide the sub navigation', () => {
          expect(wrapper.queryByText('Design Tokens')).not.toBeInTheDocument()
        })

        it('should set the `aria-label` attribute on the `Reference` menu item', () => {
          expect(wrapper.getByText('Reference')).toHaveAttribute(
            'aria-label',
            'Show menu'
          )
        })
      })
    })
  })
})
