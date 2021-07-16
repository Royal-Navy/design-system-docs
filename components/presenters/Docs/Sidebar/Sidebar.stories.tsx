import React from 'react'
import Link from 'next/link'
import { storiesOf } from '@storybook/react'
import { IconBookmark } from '@royalnavy/icon-library'

import {
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarOverview,
  SidebarOverviewMenuItem,
} from '.'

const stories = storiesOf('Docs/Sidebar', module)

stories.add('Default', () => (
  <Sidebar title="Components">
    <SidebarOverview>
      <SidebarOverviewMenuItem
        icon={<IconBookmark />}
        link={<Link href="#storybook">Storybook</Link>}
      />
      <SidebarOverviewMenuItem
        icon={<IconBookmark />}
        link={<Link href="#axure-prototype-kit">Axure Prototype Kit</Link>}
      />
    </SidebarOverview>
    <SidebarMenu>
      <SidebarMenuItem link={<Link href="#alert">Alert</Link>} />
      <SidebarMenuItem link={<Link href="#avatar">Avatar</Link>} />
      <SidebarMenuItem link={<Link href="#badge">Badge</Link>} />
      <SidebarMenuItem link={<Link href="#breadcrumbs">Breadcrumbs</Link>} />
      <SidebarMenuItem link={<Link href="#button">Button</Link>} />
    </SidebarMenu>
    <SidebarMenu title="Banners">
      <SidebarMenuItem
        link={<Link href="#dismissible-banner">Dismissible Banner</Link>}
      />
      <SidebarMenuItem link={<Link href="#phase-banner">Phase Banner</Link>} />
    </SidebarMenu>
    <SidebarMenu title="Cards">
      <SidebarMenuItem link={<Link href="#content">Content</Link>} />
      <SidebarMenuItem link={<Link href="#frame">Frame</Link>} />
    </SidebarMenu>
    <SidebarMenu title="Forms">
      <SidebarMenuItem link={<Link href="#checkbox">Checkbox</Link>} />
      <SidebarMenuItem link={<Link href="#date-picker">Date Picker</Link>} />
      <SidebarMenuItem link={<Link href="#number-input">Number Input</Link>} />
      <SidebarMenuItem link={<Link href="#radio">Radio</Link>} />
      <SidebarMenuItem link={<Link href="#select">Select</Link>} />
      <SidebarMenuItem link={<Link href="#text-input">Text Input</Link>} />
      <SidebarMenuItem link={<Link href="#text-area">Text Area</Link>} />
    </SidebarMenu>
  </Sidebar>
))
