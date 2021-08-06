import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { IconBookmark } from '@royalnavy/icon-library'
import Link from 'next/link'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Sidebar } from './Sidebar'
import { SidebarFilter } from './SidebarFilter'
import { SidebarMenu } from './SidebarMenu'
import { SidebarMenuItem } from './SidebarMenuItem'
import { SidebarOverview } from './SidebarOverview'
import { SidebarOverviewMenuItem } from './SidebarOverviewMenuItem'

describe('Sidebar', () => {
  let onChangeSpy: jest.SpyInstance
  let onClearSpy: jest.SpyInstance
  let wrapper: RenderResult

  beforeEach(() => {
    const filterProps = {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => undefined,
      onClear: (e: React.MouseEvent<HTMLButtonElement>, value: string) =>
        undefined,
    }

    onChangeSpy = jest.spyOn(filterProps, 'onChange')
    onClearSpy = jest.spyOn(filterProps, 'onClear')

    wrapper = render(
      <Sidebar title="Components">
        <SidebarOverview>
          <SidebarOverviewMenuItem
            icon={<IconBookmark data-testid="icon-1" />}
            link={<Link href="#storybook">Storybook</Link>}
          />
          <SidebarOverviewMenuItem
            icon={<IconBookmark data-testid="icon-2" />}
            link={<Link href="#axure-prototype-kit">Axure Prototype Kit</Link>}
          />
        </SidebarOverview>
        <SidebarFilter {...filterProps} />
        <SidebarMenu>
          <SidebarMenuItem link={<Link href="#1">Item 1</Link>} />
          <SidebarMenuItem link={<Link href="#2">Item 2</Link>} />
        </SidebarMenu>
      </Sidebar>
    )
  })

  it('should render the overview', () => {
    const links = wrapper.getAllByTestId('sidebar-overview-link')

    expect(links[0]).toHaveTextContent('Storybook')
    expect(links[0]).toHaveAttribute('href', '/#storybook')
    expect(links[1]).toHaveTextContent('Axure Prototype Kit')
    expect(links[1]).toHaveAttribute('href', '/#axure-prototype-kit')
    expect(links).toHaveLength(2)
  })

  it('should render the overview icons', () => {
    expect(wrapper.getByTestId('icon-1')).toBeInTheDocument()
    expect(wrapper.getByTestId('icon-2')).toBeInTheDocument()
  })

  it('should render the menu items', () => {
    const links = wrapper.getAllByTestId('sidebar-link')

    expect(links[0]).toHaveTextContent('Item 1')
    expect(links[0]).toHaveAttribute('href', '/#1')
    expect(links[1]).toHaveTextContent('Item 2')
    expect(links[1]).toHaveAttribute('href', '/#2')
    expect(links).toHaveLength(2)
  })

  describe('when typing into the filter', () => {
    beforeEach(async () => {
      const input = wrapper.getByTestId('sidebar-filter-input')

      await userEvent.type(input, 'a')
      await userEvent.type(input, 'b')
      await userEvent.type(input, 'c')
    })

    it('should call the `onChange` callback', () => {
      expect(onChangeSpy.mock.calls[0][1]).toEqual('a')
      expect(onChangeSpy.mock.calls[1][1]).toEqual('ab')
      expect(onChangeSpy.mock.calls[2][1]).toEqual('abc')

      expect(onChangeSpy).toHaveBeenCalledTimes(3)
    })

    describe('when the submit button is clicked', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByTestId('sidebar-filter-button'))
      })

      it('should call the `onClear` callback', () => {
        expect(onClearSpy.mock.calls[0][1]).toEqual('')

        expect(onClearSpy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
