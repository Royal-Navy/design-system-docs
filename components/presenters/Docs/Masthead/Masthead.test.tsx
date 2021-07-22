import React from 'react'
import Link from 'next/link'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import {
  Masthead,
  MastheadMenu,
  MastheadMenuItem,
  MastheadSubMenu,
  MastheadSubMenuItem,
} from '.'

describe('Masthead', () => {
  let wrapper: RenderResult
  let onToggleSpy: (e: React.MouseEvent<HTMLButtonElement>) => void

  describe('with required props', () => {
    beforeEach(() => {
      onToggleSpy = jest.fn()

      wrapper = render(
        <Masthead version="3.0.0" onToggle={() => null}>
          <MastheadMenu>
            <MastheadMenuItem link={<Link href="#guidance">Guidance</Link>} />
            <MastheadMenuItem
              link={<Link href="#principles">Principles</Link>}
            />
            <MastheadMenuItem link={<Link href="#reference">Reference</Link>}>
              <MastheadSubMenu>
                <MastheadSubMenuItem
                  link={<Link href="#design-tokens">Design Tokens</Link>}
                />
              </MastheadSubMenu>
            </MastheadMenuItem>
            <MastheadMenuItem link={<Link href="#resources">Resources</Link>} />
            <MastheadMenuItem link={<Link href="#help">Help</Link>} />
            <MastheadMenuItem link={<Link href="#blog">Blog</Link>} />
          </MastheadMenu>
        </Masthead>
      )
    })

    it('render the version', () => {
      expect(wrapper.queryByText('3.0.0')).toBeInTheDocument()
    })

    it('should not display the sub navigation', () => {
      expect(wrapper.queryByText('Design Tokens')).not.toBeInTheDocument()
    })

    describe('and the user clicks the expand nav button', () => {
      beforeEach(() => {
        fireEvent.click(wrapper.getByTestId('masthead-menu-expand-button'))
      })

      it('should display the sub navigation', () => {
        expect(wrapper.queryByText('Design Tokens')).toBeInTheDocument()
      })
    })

    describe.skip('and the end user clicks the mobile menu button', () => {
      beforeEach(() => {
        fireEvent.click(wrapper.getByTestId('masthead-toggle-button'))
      })

      it('should show the mobile navigation', () => {
        expect(onToggleSpy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
