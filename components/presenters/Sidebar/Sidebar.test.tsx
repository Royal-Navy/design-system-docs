import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { Sidebar, SidebarMenu, SidebarMenuItem } from '.'

describe('Sidebar', () => {
  let wrapper: RenderResult
  let onToggleSpy: (e: React.MouseEvent<HTMLButtonElement>) => void

  describe('with required props', () => {
    beforeEach(() => {
      onToggleSpy = jest.fn()

      wrapper = render(
        <Sidebar title="Compound Timeline" onToggle={onToggleSpy}>
          <SidebarMenu title="Introduction">
            <SidebarMenuItem href="#home" title="Home" />
          </SidebarMenu>
        </Sidebar>
      )
    })

    it('renders the title', () => {
      expect(wrapper.getByTestId('sidebar-title')).toHaveTextContent(
        'Compound Timeline'
      )
    })

    it('renders the menu title', () => {
      expect(wrapper.getByTestId('sidebar-menu-title')).toHaveTextContent(
        'Introduction'
      )
    })

    it('renders the link text', () => {
      expect(wrapper.getByTestId('sidebar-link')).toHaveTextContent('Home')
    })

    describe('when the user clicks the toggle menu button', () => {
      beforeEach(() => {
        fireEvent.click(wrapper.getByTestId('sidebar-toggle-button'))
      })

      it('invokes the supplied callback', () => {
        expect(onToggleSpy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
