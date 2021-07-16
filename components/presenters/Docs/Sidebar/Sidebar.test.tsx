import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import Link from 'next/link'
import { render, RenderResult } from '@testing-library/react'

import { Sidebar } from './Sidebar'
import { SidebarMenu } from './SidebarMenu'
import { SidebarMenuItem } from './SidebarMenuItem'

describe('Sidebar', () => {
  let wrapper: RenderResult

  beforeEach(() => {
    wrapper = render(
      <Sidebar title="Components">
        <SidebarMenu>
          <SidebarMenuItem link={<Link href="#1">Item 1</Link>} />
          <SidebarMenuItem link={<Link href="#2">Item 2</Link>} />
        </SidebarMenu>
      </Sidebar>
    )
  })

  it('should render the menu items', () => {
    const links = wrapper.getAllByTestId('sidebar-link')

    expect(links[0]).toHaveTextContent('Item 1')
    expect(links[0]).toHaveAttribute('href', '/#1')
    expect(links[1]).toHaveTextContent('Item 2')
    expect(links[1]).toHaveAttribute('href', '/#2')
    expect(links).toHaveLength(2)
  })
})
